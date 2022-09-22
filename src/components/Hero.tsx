import Typewriter from 'typewriter-effect'

export default function Hero() {
  return (
    <section className='hero'>
      <div className='container hero__container'>
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .pauseFor(500)
              .typeString('<h1><span>e</span>-Tracking</h1>')
              .pauseFor(15000)
              .deleteChars(20)
              .typeString('<h1>A <span>Melhor</span> forma de rastreio</h1>')
              .pauseFor(15000)
              .deleteChars(19)
              .start()
          }}
          options={{ loop: true }}
        />
      </div>
    </section>
  )
}