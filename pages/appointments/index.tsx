import SearchBar from '@/components/SearchBar/SearchBar'
import VerticalList from '@/components/VerticalList/VerticalList'
import { IGetAppointmentsResponse } from '@/services/response.interfaces';
import UserService, { IAppointment } from '@/services/user.service';
import DateTimeParser from '@/utils/DateTimeParser';
import Routes from '@/utils/Routes';
import { Button } from '@mui/material'
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

export default function Appointments() {
  const router = useRouter();
  
  const [appointments, setAppointments] = useState<any[]>([
    { id: 1, specialisation: { name: 'Specialisation 1' }, doctor: {name: 'Doctor 1'}, date: new Date('2021-10-11') },
    { id: 2, specialisation: { name: 'Specialisation 2' }, doctor: {name: 'Doctor 2'}, date: new Date('2021-10-12') },
    { id: 3, specialisation: { name: 'Specialisation 3' }, doctor: {name: 'Doctor 3'}, date: new Date('2021-10-13') },
    { id: 4, specialisation: { name: 'Specialisation 4' }, doctor: {name: 'Doctor 4'}, date: new Date('2021-10-14') },
    { id: 5, specialisation: { name: 'Specialisation 5' }, doctor: {name: 'Doctor 5'}, date: new Date('2021-10-15') },
    { id: 6, specialisation: { name: 'Specialisation 6' }, doctor: {name: 'Doctor 6'}, date: new Date('2021-10-16') },
    { id: 7, specialisation: { name: 'Specialisation 7' }, doctor: {name: 'Doctor 7'}, date: new Date('2021-10-17') },
    { id: 8, specialisation: { name: 'Specialisation 8' }, doctor: {name: 'Doctor 8'}, date: new Date('2021-10-18') },
    { id: 9, specialisation: { name: 'Specialisation 9' }, doctor: {name: 'Doctor 9'}, date: new Date('2021-10-19') },
  ]);

  // useEffect(() => {
  //   UserService.getAppointments().then((res: IGetAppointmentsResponse) => {
  //     if(res.success && res.appointments){
  //       setAppointments(res.appointments);
  //     } else {
  //       console.log(res.message);
  //     }
  //   });
  // }, []);

  return (
    <div className='main_page'>
      <div className='flex flex-row items-center justify-between w-full h-14'>
        <SearchBar placeholder='Search appointment...' />
        <Link href={ Routes.FILL_FORM }>
          <Button className='main_button text-lg h-14'>
            New Appointment
          </Button>
        </Link>
      </div>
      <p className='text-4xl mt-7 mb-7 text-blue-600 w-full'>
        My Appointments
      </p>
      <VerticalList className='appointments_list_max_height'
        list= {
          appointments.map((appointment: IAppointment) => {
            return {
              title:  appointment.specialisation.name + ' with ' + 
                      appointment.doctor.name + ' on ' +
                      DateTimeParser.parseDate(appointment.date) + ' at ' +
                      DateTimeParser.parseTime(appointment.date),
              onClick: () => appointment.id && router.push(Routes.APPOINTMENT(appointment.id)),
            }
          })
        }
      />
    </div>
  )
}
