import MainLayout from '../components/Layouts/MainLayout'
import Hero from '@/components/Modules/Hero'
import TwoSectionImageAndCTA from '@/components/Modules/TwoSectionImageAndCTA'


export default function Home() {
  return (
    <MainLayout>
      <Hero
        title="WE ARE CREATIVES"
        arrowPath="/icon-arrow-down.svg"
        backgroundImage="/image-header.jpg"
      />
      <TwoSectionImageAndCTA
        title="Transform your brand"
        description="We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you."
        imageUrl="/image-transform.jpg"
        ctaText="Learn more"
        ctaUrl="/"
        flipSides={true}
      />
      <TwoSectionImageAndCTA
        title="Transform your brand"
        description="We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you."
        imageUrl="/image-transform.jpg"
        ctaText="Learn more"
        ctaUrl="/"
        flipSides={false}
      />


    </MainLayout>
  )
}
