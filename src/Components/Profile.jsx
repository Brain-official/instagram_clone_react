import React from 'react'
import { BsGrid3X3 } from 'react-icons/bs'
import { BiBookmark } from 'react-icons/bi'
import { FaRegAddressBook } from 'react-icons/fa'
import Layout from './Layout/Layout'
import { HiBadgeCheck } from 'react-icons/hi'

const Profile = () => {
	return (
		<Layout>
			<div
				className=" container"
				style={{
					paddingTop: window.innerWidth > 500 ? '15vh' : '20vh',
					paddingBottom: '18vh',
				}}
			>
				<section className="row justify-content-center align-items-center pb-5">
					<div className="col-lg-2">
						<img
							src="https://st.depositphotos.com/1269204/1219/i/600/depositphotos_12196477-stock-photo-smiling-men-isolated-on-the.jpg"
							width="130"
							height={'130'}
							className="rounded-circle"
						/>
					</div>
					<div className="col-lg-5">
						<div>
							<div className="d-flex align-items-center justify-content-between">
								<h3 className="d-flex">
									emyboybeats{' '}
									<span>
										<HiBadgeCheck className="mx-2 text-primary" />
									</span>
								</h3>
								<span>
									<button className="ml-4 btn border btn-sm font-weight-bold">
										Edit Profile
									</button>
								</span>
							</div>
						</div>
						<div className="d-flex">
							<div className="m-2">
								<strong>34</strong> Posts
							</div>
							<div className="m-2">
								<strong>1,233 </strong> Followers
							</div>
							<div className="m-2">
								<strong>4,233 </strong> Following
							</div>
						</div>
					</div>
				</section>
				<br />
				<div className="row justify-content-center">
					<section className="mt-5 col-sm-12 col-lg-8">
						<div className="d-flex border-top justify-content-center">
							<EachTab title={'Post'} active Icon={<BsGrid3X3 />} />
							<EachTab title={'Saved'} Icon={<BiBookmark />} />
							<EachTab title={'Tagged'} Icon={<FaRegAddressBook />} />
						</div>
						<div className="mt-3">
							<section>
								<div className="row">
									<EachProfilePost />
									<EachProfilePost />
									<EachProfilePost />
									<EachProfilePost />
									<EachProfilePost />
									<EachProfilePost />
									<EachProfilePost />
									<EachProfilePost />
								</div>
							</section>
						</div>
					</section>
				</div>

				{/* Profile
			<h1>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. A sint eius
				asperiores natus accusantium tempora autem consequuntur quia quas
				recusandae quasi quae fugiat adipisci, iure maiores expedita dolor?
				Porro, ducimus.
			</h1> */}
			</div>
		</Layout>
	)
}

const EachTab = ({ active, title, Icon }) => {
	return (
		<div
			className={`mx-3 d-flex p-2 align-items-center ${
				active ? 'border-top border-2 border-dark text-black' : 'text-muted'
			}`}
		>
			{Icon}{' '}
			<h6 className={`m-0 m-1 ${active ? 'text-dark' : 'text-muted'}`}>
				{title}
			</h6>
		</div>
	)
}

const EachProfilePost = () => {
	return (
		<div className="col-lg-4 col-sm-12">
			<div
				className="mb-3"
				style={{
					backgroundImage: `url(https://thumbs.dreamstime.com/b/closeup-photo-funny-excited-lady-raise-fists-screaming-loudly-celebrating-money-lottery-winning-wealthy-rich-person-wear-casual-172563278.jpg)`,
					height: '400px',
					backgroundSize: 'cover',
					backgroundPosition: 'center',
				}}
			></div>
		</div>
	)
}

export default Profile
