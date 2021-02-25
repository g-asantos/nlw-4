
import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { SurveysRepository } from '../repositories/SurveysRepository';
import { SurveysUsersRepository } from '../repositories/SurveysUsersRepository';
import { UsersRepository } from '../repositories/UsersRepository';
import SendMailService from '../services/SendMailService';
import {resolve} from 'path';

class SendMailController{




    async execute(req: Request, res: Response){
        const {email, survey_id} = req.body;


        const usersRepository = getCustomRepository(UsersRepository);
        const surveysRepository = getCustomRepository(SurveysRepository);
        const surveysUsersRepository = getCustomRepository(SurveysUsersRepository);

        const userAlreadyExists = await usersRepository.findOne({email});

        if(!userAlreadyExists){
            return res.status(400).json({
                error: "User does not exist!",
            })
        }

        const survey = await surveysRepository.findOne({id:survey_id});

        if(!survey){
            return res.status(400).json({
                error: "Survey does not exist!"
            })
        }

        const variables = {
            name: userAlreadyExists.name,
            title: survey.title,
            description: survey.description,
            user_id: userAlreadyExists.id,
            link: process.env.URL_MAIL
        }
        const npsPath = resolve(__dirname, "..", "views", "emails", "npsmail.hbs");


        const surveyUserAlreadyExists = await surveysUsersRepository.findOne({
            where: [
                {
                    user_id: userAlreadyExists.id,
                },
                {
                    value: null,
                }
            ],
            relations: [
                "user",
                "survey"
            ]
        });

        if(surveyUserAlreadyExists){
            await SendMailService.execute(email, survey.title, variables, npsPath);
            return res.json(surveyUserAlreadyExists);
        }

        const surveyUser = await surveysUsersRepository.create({
            user_id: userAlreadyExists.id,
            survey_id,
        });

        await surveysUsersRepository.save(surveyUser);


        
        await SendMailService.execute(email,
        survey.title, variables, npsPath);

            
        return res.json(surveyUser);
    }


}

export {SendMailController};