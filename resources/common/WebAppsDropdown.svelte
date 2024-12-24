<script>
	import { Dropdown, DropdownToggle, DropdownMenu, Row, Col, Image } from 'sveltestrap';
	import { Link } from '@inertiajs/svelte';
	import github from '../assets/images/brands/github.png';
	import bitbucket from '../assets/images/brands/bitbucket.png';
	import dribbble from '../assets/images/brands/dribbble.png';
	import dropbox from '../assets/images/brands/dropbox.png';
	import mail_chimp from '../assets/images/brands/mail_chimp.png';
	import slack from '../assets/images/brands/slack.png';
</script>

<Dropdown class="d-none d-lg-inline-block ms-1">
	<DropdownToggle type="button" color="" tag="a" class="btn header-item noti-icon waves-effect">
		<i class="bx bx-customize" ></i>
	</DropdownToggle>
	<DropdownMenu class="dropdown-menu-lg" end>
		<div class="px-lg-2">
			<Row class="g-0">
				<Col>
					<Link class="dropdown-icon-item" href={null}>
						<Image src={github} alt="Github" />
						<span>GitHub</span>
					</Link>
				</Col>
				<Col>
					<Link class="dropdown-icon-item" href={null}>
						<Image src={bitbucket} alt="bitbucket" />
						<span>Bitbucket</span>
					</Link>
				</Col>
				<Col>
					<Link class="dropdown-icon-item" href={null}>
						<Image src={dribbble} alt="dribbble" />
						<span>Dribbble</span>
					</Link>
				</Col>
			</Row>

			<Row class="row g-0">
				<Col>
					<Link class="dropdown-icon-item" href={null}>
						<Image src={dropbox} alt="dropbox" />
						<span>Dropbox</span>
					</Link>
				</Col>
				<Col>
					<Link class="dropdown-icon-item" href={null}>
						<Image src={mail_chimp} alt="mail_chimp" />
						<span>Mail Chimp</span>
					</Link>
				</Col>
				<Col>
					<Link class="dropdown-icon-item" href={null}>
						<Image src={slack} alt="slack" />
						<span>Slack</span>
					</Link>
				</Col>
			</Row>
		</div>
	</DropdownMenu>
</Dropdown>
