import { useUserService } from "../services/useUserService";
import { useUserStore } from "../store/User";

export const useUser = () => {
  const userStore = useUserStore()

  const getUserInfo = () => {
    const {user} = useUserService()
    userStore.setUserInfo(user)
  }

  return {
    getUserInfo
  }
}
