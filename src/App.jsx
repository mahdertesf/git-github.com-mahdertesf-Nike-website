import { CustomerReviews,Footer, Hero,
   PopularProducts, 
   Services, Specialoffer, 
   Subscribe, SuperQuality,  } from "./sections";
import Nav from "./Components/Nav";
const App=()=>{


  return(
    <main className="relative">
     <Nav/> 
    <section className="xl:padding-1 wide:padding:r padding-b">
      <Hero/>
      <section className="padding">
        <PopularProducts/>

      </section>
      <section className="padding">
        <SuperQuality/>

      </section>
      <section className="padding">
        <Services/>

      </section>
      <section className="padding">
        <Specialoffer/>

      </section>
      <section className="padding bg-pale-blue">
        <CustomerReviews/>

      </section>
      <section className="padding padding-x sm:py-32 py:16 w-full">
        <Subscribe/>

      </section>
      <section className="padding bg-black padding-x padding-t pb-8">
        <Footer/>
        

      </section>
    </section>
  </main>
  )
}

export default App;