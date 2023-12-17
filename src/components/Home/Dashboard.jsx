import dashboard from '../../assets/hero-dashboard.png'

const Dashboard = () => {
  return (
    <div className='bg-slate-100'>
        <section className='max-w-5xl mx-auto'>
            <div className='w-full pb-12 overflow-hidden'>
                <img src={dashboard} alt="dashboard" className='w-full ml-20' />
            </div>
        </section>
    </div>
  )
}

export default Dashboard