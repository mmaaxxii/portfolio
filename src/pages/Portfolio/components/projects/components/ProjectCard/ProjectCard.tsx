import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { pink } from '@mui/material/colors';

import ComputerIcon from '@mui/icons-material/Computer';
import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { styled } from '@mui/material/styles';
import { AlignCenter } from 'react-bootstrap-icons';


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
	const [expanded, setExpanded] = React.useState(false);

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};
	return (
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
				title={title}
				subheader={date}
			/>
			<CardMedia
				component="img"
				height="194"
				image={img}
				alt={alt}
			/>
			<CardContent>
				<Typography variant="body2" color="text.secondary">
					{short}
				</Typography>
			</CardContent>
			<CardActions disableSpacing>
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
					<Typography paragraph>
						{detail}
					</Typography>
				</CardContent>
			</Collapse>
		</Card>

	);
};

export default ProjectCard;
