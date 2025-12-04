export function useScrollNavigation() {
  const scrollTo = id => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: 'smooth' })
  };

  return { scrollTo };
}
