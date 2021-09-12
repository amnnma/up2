import { ResultData } from '../components/util/ResultContext';

function Card({ id, img, name, time, play, description }: ResultData) {
	return (
		<section className="text-white">
			<div key={id}>
				<p>{name}</p>
				<img src={img} alt="matching_dog" />
			</div>
			<div className="content">
				<div className="wrapper">
					<span>ระยะเวลาที่ทำ</span>
					<span>{time}</span>
				</div>
				<div className="wrapper">
					<span>TEST</span>
					<span>{play}</span>
				</div>
				<div className="wrapper description">
					<span>{description}</span>
				</div>
			</div>
		</section>
	);
}

export default Card;