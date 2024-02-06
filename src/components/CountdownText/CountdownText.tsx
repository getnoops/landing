import { useEffect, useState } from "react";

const GetInitialTime = (initialDate: string) => {
	const now = new Date().getTime();

	// get launch time:
	const launch = new Date(initialDate).getTime();

	// get the difference:
	const difference = launch - now;

	// calculate days, hours, minutes, seconds:
	const days = Math.floor(difference / (1000 * 60 * 60 * 24));
	const hours = Math.floor(
		(difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
	);
	const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
	const seconds = Math.floor((difference % (1000 * 60)) / 1000);

	// add leading zeros:
	const daysTill = days < 10 ? `0${days}` : days.toString();
	const hoursTill = hours < 10 ? `0${hours}` : hours.toString();
	const minutesTill = minutes < 10 ? `0${minutes}` : minutes.toString();
	const secondsTill = seconds < 10 ? `0${seconds}` : seconds.toString();

	return [daysTill, hoursTill, minutesTill, secondsTill];
};

const GetInitialLaunchDate = () => {
	const now = new Date().getTime();

	// test: 2024-01-01T11:11:11
	const d = "2024-03-01T00:00:00";

	// get launch time:
	const launch = new Date(d).getTime();

	// get the difference:
	const difference = launch - now;

	if (difference < 0) {
		// add three seconds to the current time
		var t = new Date();
		t.setSeconds(t.getSeconds() + 4);

		return t.toISOString();
	}

	return d;
};

const CountdownText = ({
	countDownComplete,
	setCountDownComplete,
}: {
	countDownComplete: boolean;
	setCountDownComplete: (value: boolean) => void;
}) => {
	// this avoids the flicker of the initial time
	// launch time 2024-03-01T00:00:00
	const initialDate = GetInitialLaunchDate();
	const [d, h, m, s] = GetInitialTime(initialDate);
	const [days, setDays] = useState(d);
	const [hours, setHours] = useState(h);
	const [minutes, setMinutes] = useState(m);
	const [seconds, setSeconds] = useState(s);

	const [launchDate, setLaunchDate] = useState(initialDate);

	useEffect(() => {
		let interval;

		const count = () => {
			// get current time:
			const now = new Date().getTime();

			// get launch time:
			const launch = new Date(launchDate).getTime();

			// get the difference:
			const difference = launch - now;

			// calculate days, hours, minutes, seconds:
			let days = Math.floor(difference / (1000 * 60 * 60 * 24));
			let hours = Math.floor(
				(difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
			);
			let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
			let seconds = Math.floor((difference % (1000 * 60)) / 1000);

			// add leading zeros:
			setDays(days < 10 ? `0${days}` : days.toString());
			setHours(hours < 10 ? `0${hours}` : hours.toString());
			setMinutes(minutes < 10 ? `0${minutes}` : minutes.toString());
			setSeconds(seconds < 10 ? `0${seconds}` : seconds.toString());

			if (difference < 0) {
				clearInterval(interval);
				setDays("00");
				setHours("00");
				setMinutes("00");
				setSeconds("00");
				setCountDownComplete(true);
			}
		};

		interval = setInterval(count, 1000);
		count();

		return () => clearInterval(interval);
	});

	return (
		<div className="relative w-full max-w-7xl text-center">
			<h6 className=" text-base font-normal text-noops-300">
				Launch Countdown
			</h6>

			<div className="flex items-center justify-center gap-x-4 text-5xl font-extrabold text-noops-300 md:text-7xl lg:text-8xl xl:gap-x-12 xl:text-9xl">
				<div className="relative">
					<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xs font-bold uppercase tracking-widest text-noops-700 md:text-sm xl:text-base xl:tracking-[0.7rem]">
						Days
					</div>
					<span className="tabular-nums">{days}</span>
				</div>
				<span className="-mt-1 text-3xl font-normal md:text-5xl xl:-mt-4 xl:text-8xl">
					:
				</span>
				<div className="relative">
					<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xs font-bold uppercase tracking-widest text-noops-700 md:text-sm xl:text-base xl:tracking-[0.5rem]">
						Hours
					</div>
					<span className="tabular-nums">{hours}</span>
				</div>
				<span className="-mt-1 text-3xl font-normal md:text-5xl xl:-mt-4 xl:text-8xl">
					:
				</span>
				<div className="relative">
					<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xs font-bold uppercase tracking-widest text-noops-700 md:text-sm xl:text-base xl:tracking-[0.5rem]">
						Minutes
					</div>
					<span className="tabular-nums">{minutes}</span>
				</div>
				<span className="-mt-1 text-3xl font-normal md:text-5xl xl:-mt-4 xl:text-8xl">
					:
				</span>
				<div className="relative">
					<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xs font-bold uppercase tracking-widest text-noops-700 md:text-sm xl:text-base xl:tracking-[0.5rem]">
						Seconds
					</div>
					<span className="tabular-nums">{seconds}</span>
				</div>
			</div>
		</div>
	);
};

export default CountdownText;
