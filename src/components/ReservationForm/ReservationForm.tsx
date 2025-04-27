import React from 'react'
import './ReservationForm.scss'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

type FormData = {
    date: Date
    time: string
    countPersons: string
}

const generateTimeOptions = () => {
    const times = []
    for (let hour = 9; hour <= 20; hour++) {
        times.push(`${hour}:00`)
        times.push(`${hour}:30`)
    }
    return times
}

const timeOptions = generateTimeOptions()

const today = new Date()
today.setHours(0, 0, 0, 0)

const schema = yup.object({
    date: yup
        .date()
        .required('Date is required')
        .min(today, 'Date cannot be in the past'),
    time: yup.string().required('Please select a time'),
    countPersons: yup.string().required('Please select a count of persons'),
})

export const ReservationForm: React.FC = () => {
    const {
        register,
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: yupResolver(schema),
    })

    const onSubmit = (data: FormData) => {
        alert(
            `Your table is successfully booked on ${data.date.toISOString().slice(0, 10)} - ${data.time}`
        )
    }

    return (
        <div
            className="reservationFormContainer"
            onSubmit={handleSubmit(onSubmit)}
        >
            <form className="reservationForm">
                <div className="formTitleContainer">
                    <h1 className="formTitle">Make a Reservation</h1>
                    <p className="formDescription">
                        Get in touch with restaurant
                    </p>
                </div>
                <div className="selectorsContainer">
                    <Controller
                        control={control}
                        name="date"
                        render={({ field }) => (
                            <DatePicker
                                className="reservationSelectors"
                                placeholderText="Select date"
                                onChange={(date) => field.onChange(date)}
                                selected={field.value}
                                dateFormat="yyyy-MM-dd"
                                withPortal
                            />
                        )}
                    />
                    {errors.date && (
                        <p className="error">{errors.date.message}</p>
                    )}
                    <select
                        className="reservationSelectors"
                        id="time"
                        {...register('time')}
                    >
                        <option value="">Select time</option>
                        {timeOptions.map((time) => (
                            <option key={time} value={time}>
                                {time}
                            </option>
                        ))}
                    </select>
                    {errors.time && <p>{errors.time.message}</p>}
                    <select
                        className="reservationSelectors"
                        id="countPersons"
                        {...register('countPersons')}
                    >
                        <option value="">Select count of persons</option>
                        <option value="1 Person">1 Person</option>
                        <option value="2 Person">2 Persons</option>
                        <option value="3 Person">3 Persons</option>
                        <option value="4 Person">4 Persons</option>
                        <option value="5 Person">5 Persons</option>
                        <option value="6 Person">6 Persons</option>
                    </select>
                    {errors.countPersons && (
                        <p className="error">{errors.countPersons.message}</p>
                    )}
                </div>
                <button className="submitButton">Book Now</button>
            </form>
        </div>
    )
}
