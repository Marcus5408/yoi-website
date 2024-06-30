import { redirect } from 'next/navigation';

export default function RedirectSite() {
  redirect("/about/team");
  return (
    <main className="w-screen h-screen flex flex-col items-center text-center justify-center bg-yoi-white dark:bg-yoi-black text-yoi-black dark:text-yoi-white">
      <h1 className="text-4xl">Automatic Redirect</h1>
      <p>
        Redirecting you to <a href="about/team" className="text-yoi-blue-1 dark:text-yoi-blue-5">theyoi.org/about/team</a>...
      </p>
      <p>If you are not automatically redirected, use the link above.</p>
    </main>
  );
}
