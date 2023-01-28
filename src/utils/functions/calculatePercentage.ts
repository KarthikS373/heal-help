const calculatePercent = (total: number, raised: number) => {
  const percentage = Math.round((raised * 100) / total)

  return percentage
}

export default calculatePercent
