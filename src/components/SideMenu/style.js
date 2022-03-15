import styled from 'styled-components'

export const UserPlaylistActionsLayout = styled.div`
 	margin: 20px 24px 0 24px;
	border-bottom: 1px solid rgb(255,255,255,.1);

	 
	.playlist-header {
		font-size: 11px;
    	letter-spacing: 2px;
	}

`

export const SideMenuLayout = styled.div`

	.logo {
		padding:24px 0 0 24px;
		margin-bottom: 20px;

		img {
			cursor:pointer;
			width: 132px; 
			height: 40px;
		}
	}

`

export const PlaylistAction = styled.li`
	display: flex;
	align-items: center;
	opacity: ${props => props.active ? 1 : 0.7};
	cursor:pointer;
	transition:.3s;
	font-weight: bold;

	.create-playlist {
		width: 32px; 
		height: 32px;
		background: #ffffff;
		display:flex;
		justify-content:center;
		align-items:center;
	}

	.liked-songs {
		width: 32px;
		height: 32px;
		background: linear-gradient(158deg, rgba(70,12,245,1) 0%, rgba(142,141,230,1) 100%);
		display: flex;
		justify-content: center;
		align-items: center;
	}

	&:hover {
		opacity:1;
	}
`

export const NavigationLinkItem = styled.li`
	display: flex;
	align-items: center;
	color: ${props => props.active ? 'rgb(255,255,255,1)' : 'rgb(255,255,255,0.5)'} ;
	margin-bottom:10px; 
	cursor:pointer;
	transition:.2s;
	padding: 5px 5px 5px 17px;
    background: ${props => props.active ? '#282828' : 'transparent'};
    margin: 0 8px 0 8px;
    border-radius: 4px;

 img {
	width: 18px;
	height: 18px;
	filter: ${props => props.active ? 'invert(1)' : 'invert(0.5)'};
	transition:.2s;
}

	&:hover {
		color: rgb(255,255,255);
		img {
			filter:invert(1) !important;
		}
	}
`