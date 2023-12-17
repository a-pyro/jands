export const scrollIntoView = (elementId: string, offest = 150) => {
  const firstSection = document.getElementById(elementId)
  if (firstSection) {
    const yCoordinate = firstSection.getBoundingClientRect().top
    const yOffset = -offest // Modifica questo valore in base al tuo offset desiderato
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' })
  }
}

export const getRandomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) + min)
}
