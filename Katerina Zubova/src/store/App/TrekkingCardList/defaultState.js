import {trekkingAPI} from '../../../trekkingApi'

export const getDefaultState = {
    items: trekkingAPI.all()
};