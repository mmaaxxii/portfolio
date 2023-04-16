import { TailSpin } from 'react-loader-spinner';
import { SpinnerContainer } from './styled-components';
import SkillBars from './../../pages/Portfolio/components/skills/components/SkillBars/SkillBars';
export interface SpinnerProps {}

const Spinner : React.FC<SpinnerProps> = () => {
	return (
		<SpinnerContainer>
			<TailSpin
				height="80"
				width="80"
				color="#f30889"
				ariaLabel="tail-spin-loading"
				radius="1"
				wrapperStyle={{}}
				wrapperClass=""
				visible={true}
			/>
		</SpinnerContainer>

	);
};

export default Spinner;
