//api文件夹下各个请求模块js，都在这里向外导出
import { recommendMusic ,newMusic} from "./Home";
export const recommendMusicApi =recommendMusic  ;//请求推荐的方法导出
export const newMusicApi =newMusic ;
import {hotSearch} from "./Search";
export const hotSearchApi =hotSearch ;
import {searchResultList} from "./Search";
export const searchResultListApi =searchResultList ;
import {getSongById} from "./Play";
export const getSongByIdApi = getSongById ;
import {getLyricById} from "./Play";
export const getLyricByIdApi =getLyricById ;
