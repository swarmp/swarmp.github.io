interface IBuildInfo {
  git: {
    branch: string
    hash: string
  }
  hostname: string
}

declare const BUILD: IBuildInfo
