'use client';

import { useState } from 'react';
import { useTheme } from '@/src/contexts/ThemeContext';
import { useAppSelector, useAppDispatch } from '@/src/hooks/redux';
import { selectCount, increment, decrement, reset } from '@/src/store/slices/counterSlice';
import Spinner from '@/src/components/common/Spinner';
import ButtonSpinner from '@/src/components/common/ButtonSpinner';
import FullPageLoader from '@/src/components/common/FullPageLoader';
import OrionLoader from '@/src/components/ui/OrionLoader';
import { toastSuccess, toastError, toastInfo, toastLoading, toastPromise, toastDismiss } from '@/src/utils/toast';

export default function Home() {
  const { theme, setTheme } = useTheme();
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const [fullPageLoading, setFullPageLoading] = useState(false);
  const [orionFullscreenLoading, setOrionFullscreenLoading] = useState(false);
  const [buttonLoading1, setButtonLoading1] = useState(false);
  const [buttonLoading2, setButtonLoading2] = useState(false);

  const triggerFullPageLoader = () => {
    setFullPageLoading(true);
    setTimeout(() => setFullPageLoading(false), 3000);
  };

  const triggerButtonLoader1 = () => {
    setButtonLoading1(true);
    setTimeout(() => setButtonLoading1(false), 2000);
  };

  const triggerButtonLoader2 = () => {
    setButtonLoading2(true);
    setTimeout(() => setButtonLoading2(false), 2000);
  };

  const triggerOrionFullscreenLoader = () => {
    setOrionFullscreenLoading(true);
    setTimeout(() => setOrionFullscreenLoading(false), 5000);
  };

  const handleSuccessToast = () => {
    toastSuccess('Operation completed successfully!');
  };

  const handleErrorToast = () => {
    toastError('Something went wrong!');
  };

  const handleInfoToast = () => {
    toastInfo('Here is some information for you.');
  };

  const handleLoadingToast = () => {
    const id = toastLoading('Processing your request...');
    setTimeout(() => {
      toastDismiss(id);
      toastSuccess('Request processed!');
    }, 3000);
  };

  const handlePromiseToast = () => {
    const fakePromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.3) {
          resolve('Success');
        } else {
          reject('Error');
        }
      }, 2000);
    });

    toastPromise(fakePromise, {
      loading: 'Sending data to server...',
      success: 'Data saved successfully!',
      error: 'Failed to save data!'
    });
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-8">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">src/app/page.tsx</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <span className="font-bold">Orionpay</span>
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <h1 className="text-6xl font-bold">Welcome to Orionpay</h1>
      </div>

      {/* Theme Switcher */}
      <div className="bg-white/80 dark:bg-gray-800/80 multi-color:bg-white/20 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold mb-4 text-center">Theme Switcher</h2>
        <div className="flex gap-4 justify-center">
          <button
            onClick={() => setTheme('light')}
            className={`px-6 py-2 rounded-lg font-semibold transition-all ${
              theme === 'light'
                ? 'bg-blue-500 text-white shadow-md scale-105'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
          >
            ☀️ Light
          </button>
          <button
            onClick={() => setTheme('dark')}
            className={`px-6 py-2 rounded-lg font-semibold transition-all ${
              theme === 'dark'
                ? 'bg-blue-500 text-white shadow-md scale-105'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
          >
            🌙 Dark
          </button>
          <button
            onClick={() => setTheme('multi-color')}
            className={`px-6 py-2 rounded-lg font-semibold transition-all ${
              theme === 'multi-color'
                ? 'bg-blue-500 text-white shadow-md scale-105'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
          >
            🎨 Multi-Color
          </button>
        </div>
        <p className="text-center mt-3 text-sm opacity-70">Current theme: {theme}</p>
      </div>

      {/* Toast Demo */}
      <div className="bg-white/80 dark:bg-gray-800/80 multi-color:bg-white/20 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold mb-4 text-center">Toast Notifications Demo</h2>
        <div className="flex flex-wrap gap-4 justify-center">
          <button
            onClick={handleSuccessToast}
            className="px-6 py-3 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition-colors shadow-md"
          >
            ✅ Success
          </button>
          <button
            onClick={handleErrorToast}
            className="px-6 py-3 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition-colors shadow-md"
          >
            ❌ Error
          </button>
          <button
            onClick={handleInfoToast}
            className="px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors shadow-md"
          >
            ℹ️ Info
          </button>
          <button
            onClick={handleLoadingToast}
            className="px-6 py-3 bg-yellow-500 text-white rounded-lg font-semibold hover:bg-yellow-600 transition-colors shadow-md"
          >
            ⏳ Loading
          </button>
          <button
            onClick={handlePromiseToast}
            className="px-6 py-3 bg-purple-500 text-white rounded-lg font-semibold hover:bg-purple-600 transition-colors shadow-md"
          >
            🎲 Promise
          </button>
        </div>
        <p className="text-center mt-4 text-sm opacity-70">Click any button to test the toast notification system</p>
      </div>

      {/* Redux Counter Demo */}
      <div className="bg-white/80 dark:bg-gray-800/80 multi-color:bg-white/20 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold mb-4 text-center">Redux Toolkit Counter Demo</h2>
        <div className="text-center mb-6">
          <span className="text-6xl font-bold">{count}</span>
          <p className="text-sm opacity-70 mt-2">Current counter value (from Redux store)</p>
        </div>
        <div className="flex flex-wrap gap-4 justify-center">
          <button
            onClick={() => dispatch(decrement())}
            className="px-6 py-3 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition-colors shadow-md"
          >
            ➖ Decrement
          </button>
          <button
            onClick={() => dispatch(reset())}
            className="px-6 py-3 bg-gray-500 text-white rounded-lg font-semibold hover:bg-gray-600 transition-colors shadow-md"
          >
            🔄 Reset
          </button>
          <button
            onClick={() => dispatch(increment())}
            className="px-6 py-3 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition-colors shadow-md"
          >
            ➕ Increment
          </button>
        </div>
        <p className="text-center mt-4 text-sm opacity-70">Redux DevTools will track all these state changes in your browser!</p>
      </div>

      {/* Loading Spinners Demo */}
      <div className="bg-white/80 dark:bg-gray-800/80 multi-color:bg-white/20 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 w-full max-w-4xl">
        <h2 className="text-2xl font-bold mb-6 text-center">Loading Spinners Demo</h2>
        
        {/* Spinner Sizes */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-center">Spinner Sizes (sm, md, lg)</h3>
          <div className="flex items-end justify-center gap-8">
            <div className="flex flex-col items-center gap-2">
              <Spinner size="sm" className="text-blue-500" />
              <span className="text-sm">sm</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Spinner size="md" className="text-green-500" />
              <span className="text-sm">md</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Spinner size="lg" className="text-purple-500" />
              <span className="text-sm">lg</span>
            </div>
          </div>
        </div>

        {/* Button Spinners */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-center">Button Spinners</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <ButtonSpinner
              loading={buttonLoading1}
              onClick={triggerButtonLoader1}
              className="px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600"
            >
              Submit Form
            </ButtonSpinner>
            <ButtonSpinner
              loading={buttonLoading2}
              onClick={triggerButtonLoader2}
              className="px-6 py-3 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600"
            >
              Save Changes
            </ButtonSpinner>
          </div>
        </div>

        {/* Full Page Loader */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-center">Full Page Loader</h3>
          <div className="flex justify-center">
            <button
              onClick={triggerFullPageLoader}
              className="px-6 py-3 bg-purple-500 text-white rounded-lg font-semibold hover:bg-purple-600 transition-colors shadow-md"
            >
              🖥️ Trigger Full Page Loading
            </button>
          </div>
        </div>

        <p className="text-center mt-6 text-sm opacity-70">All spinners use Tailwind&apos;s animate-spin and have proper accessibility labels!</p>
      </div>

      {/* Full Page Loader Component */}
      <FullPageLoader isLoading={fullPageLoading} message="Processing your request..." />

      {/* OrionPay Premium Loader Demo */}
      <div className="bg-[#050816]/90 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-gray-700 w-full max-w-4xl mt-8">
        <h2 className="text-2xl font-bold mb-6 text-center text-white">OrionPay Premium Loader Demo</h2>
        
        {/* Different sizes of OrionLoader */}
        <div className="flex items-end justify-center gap-12 mb-8">
          <div className="flex flex-col items-center gap-2">
            <OrionLoader size={60} text="" />
            <span className="text-sm text-white/70">size=60</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <OrionLoader size={100} text="" />
            <span className="text-sm text-white/70">size=100</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <OrionLoader size={140} text="Loading..." />
            <span className="text-sm text-white/70">size=140 with text</span>
          </div>
        </div>

        {/* Fullscreen Orion Loader Trigger */}
        <div className="flex justify-center">
          <button
            onClick={triggerOrionFullscreenLoader}
            className="px-8 py-4 bg-gradient-to-r from-[#4F8CFF] to-[#8B5CF6] text-white rounded-xl font-semibold hover:opacity-90 transition-all shadow-lg"
          >
            ✨ Launch Fullscreen Orion Loader
          </button>
        </div>

        <p className="text-center mt-6 text-sm text-white/70">Premium fintech-style loader with all animations: rotating logo, pulsing star, orbiting planet, and glowing orbit!</p>
      </div>

      {/* OrionLoader Fullscreen Component */}
      {orionFullscreenLoading && (
        <OrionLoader 
          fullscreen 
          text="Processing your transaction..." 
        />
      )}

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore starter templates for Next.js.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  );
}