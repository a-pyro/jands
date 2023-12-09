// import CreationPage from '../_shared/shared-page'

export default function About() {
  return (
    <div>
      <div className="flex flex-wrap p-4 md:flex-nowrap">
        {/* // <!-- Sezione di introduzione --> */}
        <div className="w-full md:w-1/2">
          <p>Testo introduttivo qui...</p>
        </div>
        <div className="w-full md:w-1/2">
          {/* <!-- Immagine landscape qui --> */}
        </div>
      </div>

      {/* // <!-- Sezione "La Nostra Storia" --> */}
      <div className="p-4">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2">
            <p>Primo paragrafo della storia...</p>
            {/* <!-- Immagine portrait qui --> */}
          </div>
          <div className="w-full md:w-1/2">
            <p>Secondo paragrafo della storia...</p>
            {/* <!-- Immagine portrait qui --> */}
          </div>
        </div>
      </div>

      {/* // <!-- Galleria di Creazioni --> */}
      <div className="grid grid-cols-2 gap-4 p-4 md:grid-cols-4">
        {/* <!-- Immagini portrait qui --> */}
      </div>

      {/* // <!-- Filosofia e Visione --> */}
      <div className="flex flex-wrap p-4">
        <div className="w-full">
          <p>Filosofia e visione...</p>
          {/* <!-- Elementi grafici/icone qui --> */}
        </div>
      </div>
    </div>
  )
}
