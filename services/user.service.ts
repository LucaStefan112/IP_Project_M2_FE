import axios from "axios";
import { IGetAppointmentResponse, IGetUserResponse } from "./response.interfaces";
import { ServerRoutes } from "@/utils/ServerRoutes";
import { ISpecialisation } from "./app.service";
import { IDoctor } from "./doctor.service";

export interface IUser {
  id: number;
  name: string;
  email: string;
}

export interface IAppointment {
  id: number;
  date: Date;
  specialisation?: ISpecialisation;
  doctor: IDoctor;
}

export default class UserService {
  public static async setAppointment(appointment: IAppointment): Promise<IGetAppointmentResponse> {
    try {
      const res = await axios.post(process.env.SERVER + ServerRoutes.SET_APPOINTMENT, appointment);
      return res.data;
    } catch (err) {
      console.log(err);
      return { success: false, message: "Error setting appointment" };
    }
  }
}