type BridPlayerConfig = {
  id: string,
  // No idea what this does to be honest
  stats: {
    rs: number,
  },
  autoplay?: boolean,
  pauseOffView?: boolean,
  pauseAdOffView?: boolean,
  width?: string,
  height?: string,
  video?: string,
  playlist?: string,
  monetize?: boolean,
}

export default BridPlayerConfig;
