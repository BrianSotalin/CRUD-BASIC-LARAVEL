<script>
	import { Container } from 'sveltestrap';
	import { page } from '@inertiajs/svelte';
	import { onMount, afterUpdate } from 'svelte';
	import { _ } from 'svelte-i18n';
	import Link from 'svelte-link';

	// Agrega la clase activa al elemento actual y a sus padres
	const activateMenuItem = (item) => {
		while (item && !item.classList.contains('navbar-nav')) {
			item.classList.add('active');
			item = item.parentElement;
		}
	};

	// Elimina todas las clases activas
	const removeActiveDropdown = () => {
		document.querySelectorAll('.dropdown-menu a, .nav-item').forEach((item) => {
			item.classList.remove('active');
		});
	};

	// Actualiza el menú cuando cambia la URL
	const updateActiveMenu = () => {
		let currUrl = $page.url.pathname;
		if (currUrl) {
			const item = document.querySelector(`.topnav-menu a[href='${currUrl}']`);
			if (item) {
				activateMenuItem(item);
			}
		}
	};

	// Inicialización al montar el componente
	onMount(() => {
		removeActiveDropdown();
		updateActiveMenu();

		// Escuchar clics para manejar clases activas
		document.querySelectorAll('.dropdown-menu a').forEach((item) => {
			item.addEventListener('click', () => {
				removeActiveDropdown();
				activateMenuItem(item);
			});
		});
	});

	// Actualización después del renderizado
	afterUpdate(() => {
		removeActiveDropdown();
		updateActiveMenu();
	});
</script>

<div class="topnav">
	<Container fluid>
		<nav class="navbar navbar-light navbar-expand-lg topnav-menu">
			<div class="collapse navbar-collapse" id="topnav-menu-content">
				<ul class="navbar-nav">
					<li class="nav-item dropdown">
						<Link
							class="nav-link dropdown-toggle arrow-none"
							href="#"
							id="topnav-dashboard"
							role="button"
						>
							<i class="bx bx-home-circle me-2" ></i><span key="t-dashboards">{$_('Dashboards')}</span>
							<div class="arrow-down" ></div>
						</Link>
						<div class="dropdown-menu" aria-labelledby="topnav-dashboard">
							<Link href="/dashboard" class="dropdown-item" key="t-default">{$_('Default')}</Link>
							<Link href="/dashboard-saas" class="dropdown-item" key="t-saas">{$_('Saas')}</Link>
							<Link href="/dashboard-crypto" class="dropdown-item" key="t-crypto"
								>{$_('Crypto')}</Link
							>
							<Link href="/dashboard-blog" class="dropdown-item" key="t-blog">{$_('Blog')}</Link>
							<Link href="/dashboard-job" class="dropdown-item" key="t-Jobs">{$_('Jobs')}</Link>
						</div>
					</li>

					<li class="nav-item dropdown">
						<Link
							class="nav-link dropdown-toggle arrow-none"
							href="#"
							id="topnav-uielement"
							role="button"
						>
							<i class="bx bx-tone me-2" ></i>
							<span key="t-ui-elements"> {$_('UI Elements')}</span>
							<div class="arrow-down" ></div>
						</Link>

						<div
							class="dropdown-menu mega-dropdown-menu px-2 dropdown-mega-menu-xl"
							aria-labelledby="topnav-uielement"
						>
							<div class="row">
								<div class="col-lg-4">
									<div>
										<Link href="/ui/alerts" class="dropdown-item" key="t-alerts"
											>{$_('Alerts')}</Link
										>
										<Link href="/ui/buttons" class="dropdown-item" key="t-buttons"
											>{$_('Buttons')}</Link
										>
										<Link href="/ui/cards" class="dropdown-item" key="t-cards">{$_('Cards')}</Link>
										<Link href="/ui/carousel" class="dropdown-item" key="t-carousel"
											>{$_('Carousel')}</Link
										>
										<Link href="/ui/dropdowns" class="dropdown-item" key="t-dropdowns"
											>{$_('Dropdowns')}</Link
										>
										<Link href="/ui/grid" class="dropdown-item" key="t-grid">{$_('Grid')}</Link>
										<Link href="/ui/images" class="dropdown-item" key="t-images"
											>{$_('Images')}</Link
										>
										<Link href="/ui/lightbox" class="dropdown-item" key="t-lightbox"
											>{$_('Lightbox')}</Link
										>
									</div>
								</div>
								<div class="col-lg-4">
									<div>
										<Link href="/ui/modals" class="dropdown-item" key="t-modals"
											>{$_('Modals')}</Link
										>
										<Link href="/ui/offcanvas" class="dropdown-item" key="t-offcanvas"
											>{$_('Offcanvas')}</Link
										>
										<Link href="/ui/rangeslider" class="dropdown-item" key="t-range-slider"
											>{$_('Range Slider')}</Link
										>
										<Link href="/ui/session-timeout" class="dropdown-item" key="t-session-timeout"
											>{$_('Session Timeout')}</Link
										>
										<Link href="/ui/progressbars" class="dropdown-item" key="t-progress-bars"
											>{$_('Progress Bars')}</Link
										>
										<Link href="/ui/placeholders" class="dropdown-item" key="t-placeholders"
											>{$_('Placeholders')}</Link
										>
										<Link href="/ui/sweet-alert" class="dropdown-item" key="t-sweet-alert"
											>{$_('Sweet-Alert')}</Link
										>
										<Link href="/ui/tabs-accordions" class="dropdown-item" key="t-tabs-accordions"
											>{$_('Tabs & Accordions')}</Link
										>
									</div>
								</div>
								<div class="col-lg-4">
									<div>
										<Link href="/ui/typography" class="dropdown-item" key="t-typography"
											>{$_('Typography')}</Link
										>
										<Link href="/ui/toasts" class="dropdown-item" key="t-toasts"
											>{$_('Toasts')}</Link
										>
										<Link href="/ui/video" class="dropdown-item" key="t-video">{$_('Video')}</Link>
										<Link href="/ui/general" class="dropdown-item" key="t-general"
											>{$_('General')}</Link
										>
										<Link href="/ui/colors" class="dropdown-item" key="t-colors"
											>{$_('Colors')}</Link
										>
										<Link href="/ui/rating" class="dropdown-item" key="t-rating"
											>{$_('Rating')}</Link
										>
										<Link href="/ui/notifications" class="dropdown-item" key="t-notifications"
											>{$_('Notifications')}</Link
										>
										<Link href="/ui/utilities" class="dropdown-item" key="t-utilities"
											>{$_('Utilities')}</Link
										>
									</div>
								</div>
							</div>
						</div>
					</li>

					<li class="nav-item dropdown">
						<Link
							class="nav-link dropdown-toggle arrow-none"
							href="#"
							id="topnav-pages"
							role="button"
						>
							<i class="bx bx-customize me-2" ></i><span key="t-apps">{$_('Apps')}</span>
							<div class="arrow-down" ></div>
						</Link>
						<div class="dropdown-menu" aria-labelledby="topnav-pages">
							<div class="dropdown">
								<Link
									class="dropdown-item dropdown-toggle arrow-none"
									href="#"
									id="topnav-email"
									role="button"
								>
									<span key="t-calendar">{$_('Calendar')}</span>
									<div class="arrow-down" ></div>
								</Link>
								<div class="dropdown-menu" aria-labelledby="topnav-email">
									<Link href="/calendar" class="dropdown-item" key="t-full-calender"
										>{$_('Full Calendar')}</Link
									>
								</div>
							</div>

							<Link href="/chat" class="dropdown-item" key="t-chat">{$_('Chat')}</Link>
							<Link href="/filemanager" class="dropdown-item" key="t-file-manager"
								>{$_('File Manager')}</Link
							>
							<div class="dropdown">
								<Link
									class="dropdown-item dropdown-toggle arrow-none"
									href="#"
									id="topnav-email"
									role="button"
								>
									<span key="t-email">{$_('Email')}</span>
									<div class="arrow-down" ></div>
								</Link>
								<div class="dropdown-menu" aria-labelledby="topnav-email">
									<Link href="/email/inbox" class="dropdown-item" key="t-inbox">{$_('Inbox')}</Link>
									<Link href="/email/read" class="dropdown-item" key="t-read-email"
										>{$_('Read Email')}</Link
									>

									<div class="dropdown">
										<Link
											class="dropdown-item dropdown-toggle arrow-none"
											href="#"
											id="topnav-blog"
											role="button"
										>
											<span key="t-email-templates">{$_('Templates')}</span>
											<div class="arrow-down" ></div>
										</Link>
										<div class="dropdown-menu" aria-labelledby="topnav-blog">
											<Link href="/email/template/basic" class="dropdown-item" key="t-basic-action"
												>{$_('Basic Action')}</Link
											>
											<Link href="/email/template/alert" class="dropdown-item" key="t-alert-email"
												>{$_('Alert Email')}</Link
											>
											<Link href="/email/template/billing" class="dropdown-item" key="t-bill-email"
												>{$_('Billing Email')}</Link
											>
										</div>
									</div>
								</div>
							</div>

							<div class="dropdown">
								<Link
									class="dropdown-item dropdown-toggle arrow-none"
									href="#"
									id="topnav-ecommerce"
									role="button"
								>
									<span key="t-ecommerce">{$_('Ecommerce')}</span>
									<div class="arrow-down" ></div>
								</Link>
								<div class="dropdown-menu" aria-labelledby="topnav-ecommerce">
									<Link href="/ecommerce/products" class="dropdown-item" key="t-products"
										>{$_('Products')}</Link
									>
									<Link
										href="/ecommerce/product-detail"
										class="dropdown-item"
										key="t-product-detail">{$_('Product Detail')}</Link
									>
									<Link href="/ecommerce/orders" class="dropdown-item" key="t-orders"
										>{$_('Orders')}</Link
									>
									<Link href="/ecommerce/customers" class="dropdown-item" key="t-customers"
										>{$_('Customers')}</Link
									>
									<Link href="/ecommerce/cart" class="dropdown-item" key="t-cart">{$_('Cart')}</Link
									>
									<Link href="/ecommerce/checkout" class="dropdown-item" key="t-checkout"
										>{$_('Checkout')}</Link
									>
									<Link href="/ecommerce/shops" class="dropdown-item" key="t-shops"
										>{$_('Shops')}</Link
									>
									<Link href="/ecommerce/add-product" class="dropdown-item" key="t-add-product"
										>{$_('Add Product')}</Link
									>
								</div>
							</div>

							<div class="dropdown">
								<Link
									class="dropdown-item dropdown-toggle arrow-none"
									href="#"
									id="topnav-crypto"
									role="button"
								>
									<span key="t-crypto">{$_('Crypto')}</span>
									<div class="arrow-down" ></div>
								</Link>
								<div class="dropdown-menu" aria-labelledby="topnav-crypto">
									<Link href="/crypto/wallet" class="dropdown-item" key="t-wallet"
										>{$_('Wallet')}</Link
									>
									<Link href="/crypto/buy-sell" class="dropdown-item" key="t-buy"
										>{$_('Buy/Sell')}</Link
									>
									<Link href="/crypto/exchange" class="dropdown-item" key="t-exchange"
										>{$_('Exchange')}</Link
									>
									<Link href="/crypto/lending" class="dropdown-item" key="t-lending"
										>{$_('Lending')}</Link
									>
									<Link href="/crypto/orders" class="dropdown-item" key="t-orders"
										>{$_('Orders')}</Link
									>
									<Link href="/crypto/kyc-application" class="dropdown-item" key="t-kyc"
										>{$_('KYC Application')}</Link
									>
									<Link href="/crypto/ico-landing" class="dropdown-item" key="t-ico"
										>{$_('ICO Landing')}</Link
									>
								</div>
							</div>

							<div class="dropdown">
								<Link
									class="dropdown-item dropdown-toggle arrow-none"
									href="#"
									id="topnav-project"
									role="button"
								>
									<span key="t-projects">{$_('Projects')}</span>
									<div class="arrow-down" ></div>
								</Link>
								<div class="dropdown-menu" aria-labelledby="topnav-project">
									<Link href="/projects/grid" class="dropdown-item" key="t-p-grid"
										>{$_('Projects Grid')}</Link
									>
									<Link href="/projects/list" class="dropdown-item" key="t-p-list"
										>{$_('Projects List')}</Link
									>
									<Link href="/projects/overview" class="dropdown-item" key="t-p-overview"
										>{$_('Project Overview')}</Link
									>
									<Link href="/projects/create" class="dropdown-item" key="t-create-new"
										>{$_('Create New')}</Link
									>
								</div>
							</div>
							<div class="dropdown">
								<Link
									class="dropdown-item dropdown-toggle arrow-none"
									href="#"
									id="topnav-task"
									role="button"
								>
									<span key="t-tasks">{$_('Tasks')}</span>
									<div class="arrow-down" ></div>
								</Link>
								<div class="dropdown-menu" aria-labelledby="topnav-task">
									<Link href="/tasks/list" class="dropdown-item" key="t-task-list"
										>{$_('Task List')}</Link
									>
									<Link href="/tasks/kanban" class="dropdown-item" key="t-kanban-board"
										>{$_('Kanban Board')}</Link
									>
									<Link href="/tasks/create" class="dropdown-item" key="t-create-task"
										>{$_('Create Task')}</Link
									>
								</div>
							</div>
							<div class="dropdown">
								<Link
									class="dropdown-item dropdown-toggle arrow-none"
									href="#"
									id="topnav-contact"
									role="button"
								>
									<span key="t-contacts">{$_('Contacts')}</span>
									<div class="arrow-down" ></div>
								</Link>
								<div class="dropdown-menu" aria-labelledby="topnav-contact">
									<Link href="/contacts/grid" class="dropdown-item" key="t-user-grid"
										>{$_('User Grid')}</Link
									>
									<Link href="/contacts/list" class="dropdown-item" key="t-user-list"
										>{$_('User List')}</Link
									>
									<Link href="/contacts/profile" class="dropdown-item" key="t-profile"
										>{$_('Profile')}</Link
									>
								</div>
							</div>

							<div class="dropdown">
								<Link
									class="dropdown-item dropdown-toggle arrow-none"
									href="#"
									id="topnav-blog"
									role="button"
								>
									<span key="t-blog">{$_('Blog')}</span>
									<div class="arrow-down" ></div>
								</Link>
								<div class="dropdown-menu" aria-labelledby="topnav-blog">
									<Link href="/blog/list" class="dropdown-item" key="t-blog-list"
										>{$_('Blog List')}</Link
									>
									<Link href="/blog/grid" class="dropdown-item" key="t-blog-grid"
										>{$_('Blog Grid')}</Link
									>
									<Link href="/blog/details" class="dropdown-item" key="t-blog-details"
										>{$_('Blog Details')}</Link
									>
								</div>
							</div>

							<div class="dropdown">
								<Link
									class="dropdown-item dropdown-toggle arrow-none"
									href="#"
									id="topnav-jobs"
									role="button"
								>
									<span key="t-jobs">{$_('Jobs')}</span>
									<div class="arrow-down" ></div>
								</Link>
								<div class="dropdown-menu" aria-labelledby="topnav-jobs">
									<Link href="/job/list" class="dropdown-item" key="t-job-list"
										>{$_('Job List')}</Link
									>
									<Link href="/job/grid" class="dropdown-item" key="t-job-grid"
										>{$_('Job Grid')}</Link
									>
									<Link href="/job/apply" class="dropdown-item" key="t-apply-job"
										>{$_('Apply Job')}</Link
									>
									<Link href="/job/details" class="dropdown-item" key="t-job-details"
										>{$_('Job Details')}</Link
									>
									<Link href="/job/categories" class="dropdown-item" key="t-Jobs-categories"
										>{$_('Jobs Categories')}</Link
									>
									<div class="dropdown">
										<Link
											class="dropdown-item dropdown-toggle arrow-none"
											href="#"
											id="topnav-candidate"
											role="button"
										>
											<span key="t-candidate">{$_('Candidate')}</span>
											<div class="arrow-down" ></div>
										</Link>
										<div class="dropdown-menu" aria-labelledby="topnav-candidate">
											<Link href="/candidate/list" class="dropdown-item" key="t-list"
												>{$_('List')}</Link
											>
											<Link href="/candidate/overview" class="dropdown-item" key="t-overview"
												>{$_('Overview')}</Link
											>
										</div>
									</div>
								</div>
							</div>
						</div>
					</li>

					<li class="nav-item dropdown">
						<Link
							class="nav-link dropdown-toggle arrow-none"
							href="#"
							id="topnav-components"
							role="button"
						>
							<i class="bx bx-collection me-2" ></i><span key="t-components">{$_('Components')}</span>
							<div class="arrow-down" ></div>
						</Link>
						<div class="dropdown-menu" aria-labelledby="topnav-components">
							<div class="dropdown">
								<Link
									class="dropdown-item dropdown-toggle arrow-none"
									href="#"
									id="topnav-form"
									role="button"
								>
									<span key="t-forms">{$_('Forms')}</span>
									<div class="arrow-down" ></div>
								</Link>
								<div class="dropdown-menu" aria-labelledby="topnav-form">
									<Link href="/form/elements" class="dropdown-item" key="t-form-elements"
										>{$_('Form Elements')}</Link
									>
									<Link href="/form/layouts" class="dropdown-item" key="t-form-layouts"
										>{$_('Form Layouts')}</Link
									>
									<Link href="/form/validation" class="dropdown-item" key="t-form-validation"
										>{$_('Form Validation')}</Link
									>
									<Link href="/form/advanced" class="dropdown-item" key="t-form-advanced"
										>{$_('Form Advanced')}</Link
									>
									<Link href="/form/uploads" class="dropdown-item" key="t-form-upload"
										>{$_('Form File')} Upload</Link
									>
									<Link href="/form/repeater" class="dropdown-item" key="t-form-repeater"
										>{$_('Form Repeater')}</Link
									>
									<Link href="/form/wizard" class="dropdown-item" key="t-form-wizard"
										>{$_('Form Wizard')}</Link
									>
								</div>
							</div>
							<div class="dropdown">
								<Link
									class="dropdown-item dropdown-toggle arrow-none"
									href="#"
									id="topnav-table"
									role="button"
								>
									<span key="t-tables">{$_('Tables')}</span>
									<div class="arrow-down" ></div>
								</Link>
								<div class="dropdown-menu" aria-labelledby="topnav-table">
									<Link href="/tables/basic" class="dropdown-item" key="t-basic-tables"
										>{$_('Basic Tables')}</Link
									>
									<Link href="/tables/datatable" class="dropdown-item" key="t-data-tables"
										>{$_('Data Tables')}</Link
									>
									<Link href="/tables/responsive" class="dropdown-item" key="t-responsive-table"
										>{$_('Responsive Table')}</Link
									>
								</div>
							</div>
							<div class="dropdown">
								<Link
									class="dropdown-item dropdown-toggle arrow-none"
									href="#"
									id="topnav-charts"
									role="button"
								>
									<span key="t-charts">{$_('Charts')}</span>
									<div class="arrow-down" ></div>
								</Link>
								<div class="dropdown-menu" aria-labelledby="topnav-charts">
									<Link href="/charts/apex" class="dropdown-item" key="t-apex-charts"
										>{$_('Apex charts')}</Link
									>
									<Link href="/charts/chartjs" class="dropdown-item" key="t-chartjs-charts"
										>{$_('Chartjs Charts')}</Link
									>
								</div>
							</div>
							<div class="dropdown">
								<Link
									class="dropdown-item dropdown-toggle arrow-none"
									href="#"
									id="topnav-icons"
									role="button"
								>
									<span key="t-icons">{$_('Icons')}</span>
									<div class="arrow-down" ></div>
								</Link>
								<div class="dropdown-menu" aria-labelledby="topnav-icons">
									<Link href="/icons/boxicons" class="dropdown-item" key="t-boxicons"
										>{$_('Boxicons')}</Link
									>
									<Link href="/icons/materialdesign" class="dropdown-item" key="t-material-design"
										>{$_('Material Design')}</Link
									>
									<Link href="/icons/dripicons" class="dropdown-item" key="t-dripicons"
										>{$_('Dripicons')}</Link
									>
									<Link href="/icons/fontawesome" class="dropdown-item" key="t-font-awesome"
										>{$_('Font awesome')}</Link
									>
								</div>
							</div>
							<div class="dropdown">
								<Link
									class="dropdown-item dropdown-toggle arrow-none"
									href="#"
									id="topnav-map"
									role="button"
								>
									<span key="t-maps">{$_('Maps')}</span>
									<div class="arrow-down" ></div>
								</Link>
								<div class="dropdown-menu" aria-labelledby="topnav-map">
									<Link href="/maps/google" class="dropdown-item" key="t-g-maps"
										>{$_('Google Maps')}</Link
									>
									<Link href="/maps/vector" class="dropdown-item" key="t-v-maps"
										>{$_('Vector Maps')}</Link
									>
								</div>
							</div>
						</div>
					</li>

					<li class="nav-item dropdown">
						<Link
							class="nav-link dropdown-toggle arrow-none"
							href="#"
							id="topnav-more"
							role="button"
						>
							<i class="bx bx-file me-2" ></i><span key="t-extra-pages">{$_('Extra pages')}</span>
							<div class="arrow-down" ></div>
						</Link>
						<div class="dropdown-menu" aria-labelledby="topnav-more">
							<div class="dropdown">
								<Link
									class="dropdown-item dropdown-toggle arrow-none"
									href="#"
									id="topnav-invoice"
									role="button"
								>
									<span key="t-invoices">{$_('Invoices')}</span>
									<div class="arrow-down" ></div>
								</Link>
								<div class="dropdown-menu" aria-labelledby="topnav-invoice">
									<Link href="/invoice/list" class="dropdown-item" key="t-invoice-list"
										>{$_('Invoice List')}</Link
									>
									<Link href="/invoice/detail" class="dropdown-item" key="t-invoice-detail"
										>{$_('Invoice Detail')}</Link
									>
								</div>
							</div>
							<div class="dropdown">
								<Link
									class="dropdown-item dropdown-toggle arrow-none"
									href="#"
									id="topnav-auth"
									role="button"
								>
									<span key="t-authentication">{$_('Authentication')}</span>
									<div class="arrow-down" ></div>
								</Link>
								<div class="dropdown-menu" aria-labelledby="topnav-auth">
									<Link href="/auth/login" class="dropdown-item" key="t-login">{$_('Login')}</Link>
									<Link href="/auth/login-2" class="dropdown-item" key="t-login-2"
										>{$_('Login 2')}</Link
									>
									<Link href="/auth/register" class="dropdown-item" key="t-register"
										>{$_('Register')}</Link
									>
									<Link href="/auth/register-2" class="dropdown-item" key="t-register-2"
										>{$_('Register 2')}</Link
									>
									<Link href="/auth/recoverpw" class="dropdown-item" key="t-recover-password"
										>{$_('Recover Password')}</Link
									>
									<Link href="/auth/recoverpw-2" class="dropdown-item" key="t-recover-password-2"
										>{$_('Recover Password 2')}</Link
									>
									<Link href="/auth/lock-screen" class="dropdown-item" key="t-lock-screen"
										>{$_('Lock Screen')}</Link
									>
									<Link href="/auth/lock-screen-2" class="dropdown-item" key="t-lock-screen-2"
										>{$_('Lock Screen 2')}</Link
									>
									<Link href="/auth/confirm-mail" class="dropdown-item" key="t-confirm-mail"
										>{$_('Confirm Mail')}</Link
									>
									<Link href="/auth/confirm-mail-2" class="dropdown-item" key="t-confirm-mail-2"
										>{$_('Confirm Mail 2')}</Link
									>
									<Link
										href="/auth/email-verification"
										class="dropdown-item"
										key="t-email-verification">{$_('Email verification')}</Link
									>
									<Link
										href="/auth/email-verification-2"
										class="dropdown-item"
										key="t-email-verification-2">{$_('Email verification 2')}</Link
									>
									<Link
										href="/auth/two-step-verification"
										class="dropdown-item"
										key="t-two-step-verification">{$_('Two step verification')}</Link
									>
									<Link
										href="/auth/two-step-verification-2"
										class="dropdown-item"
										key="t-two-step-verification-2">{$_('Two step verification 2')}</Link
									>
								</div>
							</div>
							<div class="dropdown">
								<Link
									class="dropdown-item dropdown-toggle arrow-none"
									href="#"
									id="topnav-utility"
									role="button"
								>
									<span key="t-utility">{$_('Utility')}</span>
									<div class="arrow-down" ></div>
								</Link>
								<div class="dropdown-menu" aria-labelledby="topnav-utility">
									<Link href="/pages/starter" class="dropdown-item" key="t-starter-page"
										>{$_('Starter Page')}</Link
									>
									<Link href="/pages/maintenance" class="dropdown-item" key="t-maintenance"
										>{$_('Maintenance')}</Link
									>
									<Link href="/pages/comingsoon" class="dropdown-item" key="t-coming-soon"
										>{$_('Coming Soon')}</Link
									>
									<Link href="/pages/timeline" class="dropdown-item" key="t-timeline"
										>{$_('Timeline')}</Link
									>
									<Link href="/pages/faqs" class="dropdown-item" key="t-faqs">{$_('FAQs')}</Link>
									<Link href="/pages/pricing" class="dropdown-item" key="t-pricing"
										>{$_('Pricing')}</Link
									>
									<Link href="/pages/404" class="dropdown-item" key="t-error-404"
										>{$_('Error 404')}</Link
									>
									<Link href="/pages/500" class="dropdown-item" key="t-error-500"
										>{$_('Error 500')}</Link
									>
								</div>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</nav>
	</Container>
</div>
