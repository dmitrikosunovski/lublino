import { OtherService } from "../../../services/other/other.service"

const getStatusGET = async (number: any) => {
    try {
      return await OtherService.getStatus(number)
    } catch (err: any) {
      throw new Error(err)
    }
  }

  export default getStatusGET