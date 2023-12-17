export const scrollIntoView = (elementId: string, offest = 200) => {
  const firstSection = document.getElementById(elementId)
  if (firstSection) {
    const yCoordinate = firstSection.getBoundingClientRect().top
    const yOffset = -offest // Modifica questo valore in base al tuo offset desiderato
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' })
  }
}
