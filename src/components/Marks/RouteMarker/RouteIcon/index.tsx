import theme from '../../../../styles/theme'

const RouteIcon = () => {
  const pathColor = theme.colors.accent[400]

  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 58 77"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M28.8003 0C12.9207 0 0.000293201 12.9204 0.000293201 28.782C-0.104107 51.984 27.7059 71.2224 28.8003 72C28.8003 72 57.7047 51.984 57.6003 28.8C57.6003 12.9204 44.6799 0 28.8003 0ZM28.8003 43.2C20.8443 43.2 14.4003 36.756 14.4003 28.8C14.4003 20.844 20.8443 14.4 28.8003 14.4C36.7563 14.4 43.2003 20.844 43.2003 28.8C43.2003 36.756 36.7563 43.2 28.8003 43.2Z"
        fill={pathColor}
      />
      <circle cx="29" cy="29" r="19" fill="#fff" />
    </svg>
  )
}

export default RouteIcon
