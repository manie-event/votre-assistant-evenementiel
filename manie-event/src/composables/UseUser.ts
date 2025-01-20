import { useUserService } from "../services/useUserService";
import { useUserStore } from "../store/User";


export const useUser = () => {
  const userStore = useUserStore()


  const setUserInfo = () => {
    const {userInfo} = useUserService()
    userStore.setUserInfo({...userInfo.value})
  }

  return {
    setUserInfo,
  }
}
