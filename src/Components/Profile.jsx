import React from 'react'
import { BsGrid3X3 } from 'react-icons/bs'
import { BiBookmark } from 'react-icons/bi'
import { FaRegAddressBook } from 'react-icons/fa'

const Profile = () => {
	return (
		<div
			className=" container"
			style={{ paddingTop: window.innerWidth > 500 ? '6vh' : '15vh' }}
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
				<div className="col-lg-4">
					<div className="row align-items-center">
						<div className="col-5">
							<h3>emyboybeats</h3>
						</div>
						<div className="col-5">
							<button className="btn border btn-sm font-weight-bold">
								Edit Profile
							</button>
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
								<div className="col-lg-4 col-sm-12">
									<EachProfilePost />
								</div>
								<div className="col-lg-4 col-sm-12">
									<EachProfilePost />
								</div>
								<div className="col-lg-4 col-sm-12">
									<EachProfilePost />
								</div>
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
		<div
			style={{
				backgroundImage: `url(https://thumbs.dreamstime.com/b/closeup-photo-funny-excited-lady-raise-fists-screaming-loudly-celebrating-money-lottery-winning-wealthy-rich-person-wear-casual-172563278.jpg)`,
				height: '400px',
				backgroundSize: 'cover',
				backgroundPosition: 'center',
			}}
		></div>
	)
}

export default Profile
