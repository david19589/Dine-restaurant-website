import Styles from "./Booking.module.css";
import Logo from "/src/assets/logo.svg";
import Arrow from "/src/assets/icons/icon-arrow.svg";
import Minus from "/src/assets/icons/icon-minus.svg";
import Plus from "/src/assets/icons/icon-plus.svg";
import CurveBottomRight from "/src/assets/patterns/pattern-curve-bottom-right.svg";
import Lines from "/src/assets/patterns/pattern-lines.svg";
import Check from "/src/assets/icons/icon-check.svg";
import { z, ZodType } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

type FormData = {
  name: string;
  email: string;
  mm: number;
  dd: number;
  yyyy: number;
  minutes: number;
  hours: number;
};

function Booking(props) {
  const [rotate, setRotate] = useState(false);
  const [quantity, setQuantity] = useState(4);

  const schema: ZodType<FormData> = z.object({
    name: z.string().min(1).max(30),
    email: z.string().email().max(40),
    mm: z.number(),
    dd: z.number(),
    yyyy: z.number().min(2024).max(2025),
    minutes: z.number(),
    hours: z.number(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const submitData = (data: FormData) => {
    return data;
  };

  const options = [
    { label: "AM", value: 1 },
    { label: "PM", value: 2 },
  ];

  const rotateFunc = () => {
    setRotate((rotate) => !rotate);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevCount) => prevCount - 1);
    }
  };
  const handleIncrement = () => {
    if (quantity < 500) {
      setQuantity((prevCount) => prevCount + 1);
    }
  };
  return (
    <div
      className={`${props.isClicked ? Styles.mainDiv2Active : Styles.mainDiv2}`}
    >
      <div className={Styles.upperDiv}>
        <img className={Styles.Logo} src={Logo} alt="logo" />
        <div className={Styles.FirstTitlePDiv}>
          <h1 className={Styles.FirstTitle}>Reservations</h1>
          <p className={Styles.FirstP}>
            We can’t wait to host you. If you have any special requirements
            please feel free to call on the phone number below. We’ll be happy
            to accommodate you.
          </p>
        </div>
        <button className={Styles.FirstButton}>RESERVE PLACE</button>
      </div>
      <div className={Styles.formDiv}>
        <form onSubmit={handleSubmit(submitData)} className={Styles.form}>
          <input
            {...register("name")}
            className={errors.name ? Styles.redForm : Styles.nameForm}
            type="text"
            placeholder="Name"
          />
          {errors.name && (
            <span className={Styles.error1}>{errors.name?.message}</span>
          )}
          <input
            {...register("email")}
            className={errors.email ? Styles.redForm : Styles.emailForm}
            type="email"
            placeholder="Email"
          />
          {errors.email && (
            <span className={Styles.error2}>{errors.email?.message}</span>
          )}
          <div className={Styles.dateDiv}>
            <label className={Styles.dateLabel}>Pick a date</label>
            <div className={Styles.date}>
              <input
                {...register("mm", { valueAsNumber: true })}
                maxLength={2}
                className={errors.mm ? Styles.MMFormRed : Styles.MMForm}
                type="tel"
                placeholder="MM"
              />
              {errors.mm && (
                <span className={Styles.error3}>{errors.mm?.message}</span>
              )}
              <input
                {...register("dd", { valueAsNumber: true })}
                maxLength={2}
                className={errors.dd ? Styles.DDFormRed : Styles.DDForm}
                type="tel"
                placeholder="DD"
              />
              {errors.dd && (
                <span className={Styles.error4}>{errors.dd?.message}</span>
              )}
              <input
                {...register("yyyy", { valueAsNumber: true })}
                maxLength={4}
                minLength={4}
                className={errors.yyyy ? Styles.YYYYFormRed : Styles.YYYYForm}
                type="tel"
                placeholder="YYYY"
              />
              {errors.yyyy && (
                <span className={Styles.error5}>{errors.yyyy?.message}</span>
              )}
            </div>
          </div>
          <div className={Styles.timeDiv}>
            <label className={Styles.timeLabel}>Pick a time</label>
            <div className={Styles.time}>
              <input
                {...register("minutes", { valueAsNumber: true })}
                maxLength={2}
                className={errors.minutes ? Styles.minutesRed : Styles.minutes}
                type="tel"
                placeholder="09"
              />
              {errors.minutes && (
                <span className={Styles.error6}>{errors.minutes?.message}</span>
              )}
              <input
                {...register("hours", { valueAsNumber: true })}
                maxLength={2}
                className={errors.hours ? Styles.hoursRed : Styles.hours}
                type="tel"
                placeholder="00"
              />
              {errors.hours && (
                <span className={Styles.error7}>{errors.hours?.message}</span>
              )}
              <select
                onClick={() => {
                  rotateFunc();
                }}
                className={Styles.AMAndPM}
              >
                {options.map((option, index) => (
                  <option key={index} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <img
                className={rotate ? Styles.arrowRotate : Styles.arrow}
                src={Arrow}
                alt="arrow"
              />
            </div>
          </div>
          <div className={Styles.peopleCount}>
            <img
              onClick={() => {
                handleDecrement();
              }}
              className={Styles.minus}
              src={Minus}
              alt="minus"
            />
            <h1 className={Styles.people}>
              {quantity === 1 ? `${quantity} person` : `${quantity} people`}
            </h1>
            <img
              onClick={handleIncrement}
              className={Styles.plus}
              src={Plus}
              alt="plus"
            />
          </div>
          <button className={Styles.secondButton} type="submit">
            MAKE RESERVATION
          </button>
        </form>
      </div>
      <img
        className={Styles.CurveBottomRight}
        src={CurveBottomRight}
        alt="CurveBottomRight"
      />
      <img className={Styles.Lines} src={Lines} alt="Lines" />
      <div className={Styles.SeventhDiv}>
        <img className={Styles.SecondLogo} src={Logo} alt="logo" />
        <div className={Styles.InfoDiv}>
          <div className={Styles.FirstSmallInfoDiv}>
            <span className={Styles.FirstInfo}>Marthwaite, Sedbergh</span>
            <span className={Styles.FirstInfo}>Cumbria</span>
            <span className={Styles.FirstInfo}>+00 44 123 4567</span>
          </div>
          <div className={Styles.SecondSmallInfoDiv}>
            <span className={Styles.SecondInfo}> OPEN TIMES</span>
            <span className={Styles.SecondInfo}>
              MON - FRI: 09:00 AM - 10:00 PM SAT - SUN: 09:00 AM - 11:30 PM
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Booking;
