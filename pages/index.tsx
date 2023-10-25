import { useRouter } from 'next/router'
import { 
  Header,
  Footer, 
  InformationCards, 
  AboutUsSection,
  BenefitsSection, 
  BenefitsDistributorSection,
  MissionStatement,
  FAQ,
  MainPageTop
} from '@/components'
import Head from 'next/head'

export default function Home() {
  return (
    <main>
      <Head>
        <title>Food Vault</title>
      </Head>
      <Header />
      <div
            className='flex min-h-screen flex-col min-w-full'
      >
        <MainPageTop />
        <div className='flex flex-col justify-between'>
          <AboutUsSection />
          <InformationCards />
          <BenefitsSection />
          <BenefitsDistributorSection />
          <MissionStatement 
            title='Our Mission'
            missionStatement='"Food Vault is a software platform that helps food businesses reduce costs by optimizing their supply chain."'
          />
          <FAQ/>
        </div>
      </div>
      <Footer />
    </main>
  )
}
