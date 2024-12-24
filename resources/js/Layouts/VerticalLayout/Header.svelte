<script>
	import { onMount } from 'svelte';
	import { Input, Dropdown, DropdownToggle, DropdownMenu, Row, Col } from 'sveltestrap';
	import { OverlayScrollbars } from 'overlayscrollbars';
	import { Link } from '@inertiajs/svelte';
	import logo from '../../../assets/images/logo.svg';
	import logodark from '../../../assets/images/logo-dark.png';
	import logolightsvg from '../../../assets/images/logo-light.svg';
	import logolightpng from '../../../assets/images/logo-light.png';
	import megamenuimg from '../../../assets/images/megamenu-img.png';
	import LanguageDropdown from '../../../common/LanguageDropdown.svelte';
	import WebAppsDropdown from '../../../common/WebAppsDropdown.svelte';
	import FullScreenDropdown from '../../../common/FullScreenDropdown.svelte';
	import NotificationDropdown from '../../../common/NotificationDropdown.svelte';
	import ProfileDropdown from '../../../common/ProfileDropdown.svelte';
	import Toast from '../../../common/Toast.svelte';

	export let toggleRightBar;

	const toggleSideBar = () => {
		document.body.classList.toggle('sidebar-enable');
		document.body.classList.toggle('vertical-collpsed');

		if (document.body.classList.contains('vertical-collpsed')) {
			const instance = OverlayScrollbars(document.querySelector('#vertical-menu'));
			if (instance) {
				instance.destroy();
			}
		} else {
			const options = {
				scrollbars: {
					visibility: 'auto',
					autoHide: 'move',
					autoHideDelay: 100,
					dragScroll: true,
					clickScroll: false,
					theme: 'os-theme-light',
					pointers: ['mouse', 'touch', 'pen']
				}
			};
			const menuElement = document.querySelector('#vertical-menu');
			OverlayScrollbars(menuElement, options);
		}
	};

	onMount(() => {
		// Lógica que depende del navegador
		if (document.body.classList.contains('vertical-collpsed')) {
			const instance = OverlayScrollbars(document.querySelector('#vertical-menu'));
			if (instance) {
				instance.destroy();
			}
		}
	});
</script>

<header id="page-topbar">
	
	<div class="navbar-header">
		<div class="d-flex">
			<Toast />
			<!-- LOGO -->
			<div class="navbar-brand-box">
				<a href="/dashboard" class="logo logo-dark">
					<span class="logo-sm">
						<img src={logo} alt="" height="22" />
					</span>
					<span class="logo-lg">
						<img src={logodark} alt="" height="17" />
					</span>
				</a>

				<a href="/dashboard" class="logo logo-light">
					<span class="logo-sm">
						<img src={logolightsvg} alt="" height="22" />
					</span>
					<span class="logo-lg">
						<img src={logolightpng} alt="" height="19" />
					</span>
				</a>
			</div>

			<button
				type="button"
				class="btn btn-sm px-3 font-size-16 header-item waves-effect"
				id="vertical-menu-btn"
				on:click={toggleSideBar}
				aria-label="Toggle Sidebar"
			>
				<i class="fa fa-fw fa-bars" ></i>
			</button>

			<!-- App Search -->
			<form class="app-search d-none d-lg-block">
				<div class="position-relative">
					<Input type="text" class="form-control" placeholder="Search..." />
					<span class="bx bx-search-alt" ></span>
				</div>
			</form>
			
			<Dropdown class="dropdown-mega d-none d-lg-block ms-2">
				<DropdownToggle color="" tag="a" class="btn header-item waves-effect">
					<span key="t-megamenu">Mega Menu</span>
					<i class="mdi mdi-chevron-down" ></i>
				</DropdownToggle>
				<DropdownMenu class="dropdown-megamenu">
					<Row>
						<Col sm={8}>
							<Row>
								<Col sm={4}>
									<h5 class="font-size-14" key="t-ui-components">UI Components</h5>
									<ul class="list-unstyled megamenu-list">
										<li>
											<Link href="javascript:void(0);" key="t-lightbox">Lightbox</Link>
										</li>
										<li>
											<Link href="javascript:void(0);" key="t-range-slider">Range Slider</Link>
										</li>
										<li>
											<Link href="javascript:void(0);" key="t-sweet-alert">Sweet Alert</Link>
										</li>
										<li>
											<Link href="javascript:void(0);" key="t-rating">Rating</Link>
										</li>
										<li>
											<Link href="javascript:void(0);" key="t-forms">Forms</Link>
										</li>
										<li>
											<Link href="javascript:void(0);" key="t-tables">Tables</Link>
										</li>
										<li>
											<Link href="javascript:void(0);" key="t-charts">Charts</Link>
										</li>
									</ul>
								</Col>
								<Col sm={4}>
									<h5 class="font-size-14" key="t-applications">Applications</h5>
									<ul class="list-unstyled megamenu-list">
										<li>
											<Link href="javascript:void(0);" key="t-ecommerce">Ecommerce</Link>
										</li>
										<li>
											<Link href="javascript:void(0);" key="t-calendar">Calendar</Link>
										</li>
										<li>
											<Link href="javascript:void(0);" key="t-email">Email</Link>
										</li>
										<li>
											<Link href="javascript:void(0);" key="t-projects">Projects</Link>
										</li>
										<li>
											<Link href="javascript:void(0);" key="t-tasks">Tasks</Link>
										</li>
										<li>
											<Link href="javascript:void(0);" key="t-contacts">Contacts</Link>
										</li>
									</ul>
								</Col>
								<Col sm={4}>
									<h5 class="font-size-14" key="t-extra-pages">Extra Pages</h5>
									<ul class="list-unstyled megamenu-list">
										<li>
											<Link href="javascript:void(0);" key="t-light-sidebar">Light Sidebar</Link>
										</li>
										<li>
											<Link href="javascript:void(0);" key="t-compact-sidebar">Compact Sidebar</Link>
										</li>
										<li>
											<Link href="javascript:void(0);" key="t-horizontal">Horizontal layout</Link>
										</li>
										<li>
											<Link href="javascript:void(0);" key="t-maintenance">Maintenance</Link>
										</li>
										<li>
											<Link href="javascript:void(0);" key="t-coming-soon">Coming Soon</Link>
										</li>
										<li>
											<Link href="javascript:void(0);" key="t-timeline">Timeline</Link>
										</li>
										<li>
											<Link href="javascript:void(0);" key="t-faqs">FAQs</Link>
										</li>
									</ul>
								</Col>
							</Row>
						</Col>
						<Col sm={4}>
							<Row>
								<Col ms={6}>
									<h5 class="font-size-14" key="t-ui-components">UI Components</h5>
									<ul class="list-unstyled megamenu-list">
										<li>
											<Link href="javascript:void(0);" key="t-lightbox">Lightbox</Link>
										</li>
										<li>
											<Link href="javascript:void(0);" key="t-range-slider">Range Slider</Link>
										</li>
										<li>
											<Link href="javascript:void(0);" key="t-sweet-alert">Sweet Alert</Link>
										</li>
										<li>
											<Link href="javascript:void(0);" key="t-rating">Rating</Link>
										</li>
										<li>
											<Link href="javascript:void(0);" key="t-forms">Forms</Link>
										</li>
										<li>
											<Link href="javascript:void(0);" key="t-tables">Tables</Link>
										</li>
										<li>
											<Link href="javascript:void(0);" key="t-charts">Charts</Link>
										</li>
									</ul>
								</Col>
								<Col ms={5}>
									<div>
										<img src={megamenuimg} alt="" class="img-fluid mx-auto d-block" />
									</div>
								</Col>
							</Row>
						</Col>
					</Row>
				</DropdownMenu>
			</Dropdown>
		</div>
		<div class="d-flex">
			<LanguageDropdown />
			<WebAppsDropdown />
			<FullScreenDropdown />
			<NotificationDropdown />
			<ProfileDropdown />

			<Dropdown class="d-inline-block">
				<button
					type="button"
					class="btn header-item noti-icon right-bar-toggle waves-effect"
					on:click={toggleRightBar}
					aria-label="Toggle Right Bar"
				>
					<i class="bx bx-cog bx-spin" ></i>
				</button>
			</Dropdown>
		</div>
	</div>
</header>