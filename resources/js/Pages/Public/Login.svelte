<script>
	import { Row, Col, CardBody, Card, Container, Form, Label, Input, Button, Alert } from 'sveltestrap';
    import { router } from '@inertiajs/svelte';
    import { Link } from '@inertiajs/svelte';
    import Headtitle from '../../../common/HeadTitle.svelte';
	import profileImg from '../../../assets/images/profile-img.png';
	import logolight from '../../../assets/images/logo-light.svg';
	import logo from '../../../assets/images/logo.svg';    

	let username = 'admin@themesbrand.com';
	let password = '123456';
	let isOpen = false;
	let msg = '';
	let status = '';
	async function onSubmit(e) {
		e.preventDefault();
		try {
			const response = await fetch('https://api-node.themesbrand.website/auth/signin', {
				method: 'POST',
				body: JSON.stringify({ email: username, password: password }),
				headers: {
					'Content-Type': 'application/json'
				}
			});

			const data = await response.json();

			if (response.ok && data.status === 'success') {
				localStorage.setItem('authUser', JSON.stringify(data));
				isOpen = true;
				msg = 'Authentication success';
				status = 'success';
				router.get('Welcome');
			} else {
				isOpen = true;
				msg = 'error';
				status = 'danger';
				const error = data.data || 'An error occurred';
				msg = error;
				return error;
			}
		} catch (error) {
			console.error('Error:', error);
			return 'An error occurred';
		}
	}
</script>

<Headtitle title="Login" />
<div class="account-pages my-5 pt-sm-5">
	<Container>
		<Row class="justify-content-center">
			<Col md={8} lg={6} xl={5}>
				<Card class="overflow-hidden">
					<div class="bg-primary-subtle">
						<Row>
							<Col class="col-7">
								<div class="text-primary p-4">
									<h5 class="text-primary">Welcome Back !</h5>
									<p>Sign in to continue to Skote.</p>
								</div>
							</Col>
							<Col class="col-5 align-self-end">
								<img src={profileImg} alt="" class="img-fluid" />
							</Col>
						</Row>
					</div>
					<CardBody class="pt-0">
						<div class="auth-logo">
							<Link href="/" class="auth-logo-light">
								<div class="avatar-md profile-user-wid mb-4">
									<span class="avatar-title rounded-circle bg-light">
										<img src={logolight} alt="" class="rounded-circle" height="34" />
									</span>
								</div>
							</Link>
							<Link href="/" class="auth-logo-dark">
								<div class="avatar-md profile-user-wid mb-4">
									<span class="avatar-title rounded-circle bg-light">
										<img src={logo} alt="" class="rounded-circle" height="34" />
									</span>
								</div>
							</Link>
						</div>
						<div class="p-2">
							<Alert {isOpen} color={status}>{msg}</Alert>
							<Form class="form-horizontal" on:submit={onSubmit}>
								<div class="mb-3">
									<Label for="username" class="form-label">Username</Label>
									<Input
										type="text"
										class="form-control"
										id="username"
										placeholder="Enter username"
										bind:value={username}
									/>
								</div>

								<div class="mb-3">
									<Label class="form-label" for="user-password">Password</Label>
									<div class="input-group auth-pass-inputgroup">
										<Input
											type="password"
											class="form-control"
											id="user-password"
											placeholder="Enter password"
											aria-label="Password"
											aria-describedby="password-addon"
											bind:value={password}
										/>
										<Button color="light" type="button" id="password-addon"
											><i class="mdi mdi-eye-outline" ></i></Button
										>
									</div>
								</div>

								<div class="form-check">
									<input class="form-check-input" type="checkbox" id="remember-check" />
									<Label class="form-check-label" for="remember-check">Remember me</Label>
								</div>

								<div class="mt-3 d-grid">
									<Button color="primary" class="waves-effect waves-light" type="submit"
										>Log In</Button
									>
								</div>

								<div class="mt-4 text-center">
									<h5 class="font-size-14 mb-3">Sign in with</h5>

									<ul class="list-inline">
										<li class="list-inline-item">
											<a href={'#'} class="social-list-item bg-primary text-white border-primary" aria-label="icon f">
												<i class="mdi mdi-facebook" ></i>
											</a>
										</li>
										<li class="list-inline-item">
											<a href={'#'} class="social-list-item bg-info text-white border-info" aria-label="icon t">
												<i class="mdi mdi-twitter" ></i>
											</a>
										</li>
										<li class="list-inline-item">
											<a href={'#'} class="social-list-item bg-danger text-white border-danger" aria-label="icon g">
												<i class="mdi mdi-google" ></i>
											</a>
										</li>
									</ul>
								</div>

								<div class="mt-4 text-center">
									<Link href="/" class="text-muted"
										><i class="mdi mdi-lock me-1" ></i> Forgot your password?</Link
									>
								</div>
							</Form>
						</div>
					</CardBody>
				</Card>
				<div class="mt-5 text-center">
					<p>
						Don&apos;t have an account ?
						<Link href="/" class="fw-medium text-primary">Signup now</Link>
					</p>
					<p>
						© {new Date().getFullYear()} Skote. Crafted with
						<i class="mdi mdi-heart text-danger" ></i> by Themesbrand
					</p>
				</div>
			</Col>
		</Row>
	</Container>
</div>
