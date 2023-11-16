import {axiosService} from "./axios.service";
import {urls} from "../constants";

const characterService = {
    getByIds: (ids) => axiosService.get(urls.characters.byIds(ids))
}

export {
    characterService
};