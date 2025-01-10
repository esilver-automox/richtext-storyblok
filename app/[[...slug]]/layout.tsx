import StoryblokProvider from '../../components/StoryblokProvider'

export default function RootLayout({ children }:any) {
  return (
    <StoryblokProvider>
      <div>
        {children}
      </div>
    </StoryblokProvider>
  )
}