import * as Joi from 'joi';

export const JoiValidationSchema = Joi.object({
    MONGODB: Joi.required(),
    PORT: Joi.string().default(3005),
    DEFAULT_LIMIT: Joi.string().default(6),
})