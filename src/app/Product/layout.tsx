
export default function Layout({ children }: { children: React.ReactNode }) {
  return (   
    <body className="w-full  bg-primary-black">  
       {children}
       </body>
  );
}