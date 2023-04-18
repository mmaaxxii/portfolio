import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Collapse from '@mui/material/Collapse';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import React from 'react';
import { ColorSchemeActive } from "@/utilities"
import ComputerIcon from '@mui/icons-material/Computer';
import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { styled } from '@mui/material/styles';
import { ProjectCardContainer } from './styled-components';


interface ExpandMoreProps extends IconButtonProps {
	expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
	const { expand, ...other } = props;
	return <IconButton {...other} />;
})(({ theme, expand }) => ({
	transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
	marginLeft: 'auto',
	transition: theme.transitions.create('transform', {
		duration: theme.transitions.duration.shortest,
	}),
}));


export interface ProjectCardProps { }

interface Props {
	logo: string;
	color: string;
	title: string;
	date: string;
	short: string;
	img: string;
	alt: string;
	detail: string;
	web: boolean;
	mobile: boolean;
}



function ProjectCard({ logo, color, title, date, short, img, alt, detail, web, mobile }: Props): JSX.Element {
	const [colorScheme, setColorScheme] = React.useState<string>(ColorSchemeActive());
	const [expanded, setExpanded] = React.useState(false);

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};
	return (
		<ProjectCardContainer>
		<Card >
			<CardHeader
				avatar={
					<Avatar sx={{ bgcolor: '#f30889'}} aria-label="recipe">
						{logo}
					</Avatar>
				}
				action={
					<IconButton aria-label="settings">
						<MoreVertIcon />
					</IconButton>
				}
				title={<h2>{title}</h2>}
				subheader={<small>{date}</small>}
				sx = { { bgcolor: 'var(--bg)' , borderStyle: 'solid solid hidden solid', borderColor: '#f30889', borderWidth: '1px', borderRadius: '5px 5px 0px 0px'  }}
			/>
			
			<CardMedia
				component="img"
				height="194"
				image={img}
				alt={alt}
				sx = { {  borderStyle: 'hidden solid', borderColor: '#f30889', borderWidth: '1px' }}
				
			/>
			<CardContent
			sx = { {  borderStyle: 'hidden solid', borderColor: '#f30889', borderWidth: '1px' }}
			 >
				<h5>
					{short}
				</h5>
			</CardContent>
			<CardActions disableSpacing
			sx = { { borderStyle: 'hidden solid solid solid', borderColor: '#f30889', borderWidth: '1px' , borderRadius: '0px 0px 5px 5px' }}>
				{
					web
						?
						<IconButton aria-label="add to favorites">
							<ComputerIcon />
						</IconButton>
						:
						''
				}
				{
					mobile
						?
						<IconButton aria-label="add to favorites">
							<MobileFriendlyIcon />
						</IconButton>
						:
						''
				}



				<ExpandMore
					expand={expanded}
					onClick={handleExpandClick}
					aria-expanded={expanded}
					aria-label="show more"
				>
					<ExpandMoreIcon />
				</ExpandMore>
			</CardActions>
			<Collapse in={expanded} timeout="auto" unmountOnExit>
				<CardContent>
					<p>
						{detail}
					</p>
				</CardContent>
			</Collapse>
		</Card>
		</ProjectCardContainer>
	);
};

export default ProjectCard;
