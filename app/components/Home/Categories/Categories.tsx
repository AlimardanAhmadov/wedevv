import classes from './Categories.module.css';

export default function Categories() {
    return (
      <div className={`${classes.categoriesSection} relative mx-auto`}>
        <h4 className='uppercase mb-4 text-gray-400 flex gap-2 items-center'>
            popular services
            <svg className='w-3 h-3 mb-1' fill='rgb(156 163 175 / 1)' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
            </svg>
        </h4>
        <div className={`${classes.categories} flex`}>
            <div className={`${classes.categoryCard} max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 shadow`}>
                <div className="flex items-center justify-between pr-4 pb-2 py-2">
                    <h1 className="text-sm font-bold text-white">Strength Training</h1>
                </div>
            </div>
            <div className={`${classes.categoryCard} max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 shadow`}>
                <div className="flex items-center justify-between pr-4 pb-2 py-2">
                    <h1 className="text-sm font-bold text-white">CrossFit</h1>
                </div>
            </div>
            <div className={`${classes.categoryCard} max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 shadow`}>
                <div className="flex items-center justify-between pr-4 pb-2 py-2">
                    <h1 className="text-sm font-bold text-white">Yoga</h1>
                </div>
            </div>
            <div className={`${classes.categoryCard} max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 shadow`}>
                <div className="flex items-center justify-between pr-4 pb-2 py-2">
                    <h1 className="text-sm font-bold text-white">Swimming</h1>
                </div>
            </div>
            <div className={`${classes.categoryCard} max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 shadow`}>
                <div className="flex items-center justify-between pr-4 pb-2 py-2">
                    <h1 className="text-sm font-bold text-white">Cycling</h1>
                </div>
            </div>
            <div className={`${classes.categoryCard} max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 shadow`}>
                <div className="flex items-center justify-between pr-4 pb-2 py-2">
                    <h1 className="text-sm font-bold text-white">Aerobics</h1>
                </div>
            </div>
            <div className={`${classes.categoryCard} max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 shadow`}>
                <div className="flex items-center justify-between pr-4 pb-2 py-2">
                    <h1 className="text-sm font-bold text-white">Dance Fitness</h1>
                </div>
            </div>
            <div className={`${classes.categoryCard} max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 shadow`}>
                <div className="flex items-center justify-between pr-4 pb-2 py-2">
                    <h1 className="text-sm font-bold text-white">Weight Training</h1>
                </div>
            </div>
            <div className={`${classes.categoryCard} max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 shadow`}>
                <div className="flex items-center justify-between pr-4 pb-2 py-2">
                    <h1 className="text-sm font-bold text-white">HIIT</h1>
                </div>
            </div>
            {/* <div className={`${classes.categoryCard} max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 shadow`}>
                <div className="flex items-center justify-between pr-4 pb-2 py-2">
                    <h1 className="text-sm font-bold text-white">Group Classes</h1>
                </div>
            </div>
            <div className={`${classes.categoryCard} max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 shadow`}>
                <div className="flex items-center justify-between pr-4 pb-2 py-2">
                    <h1 className="text-sm font-bold text-white">Endurance Training</h1>
                </div>
            </div>
            <div className={`${classes.categoryCard} max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 shadow`}>
                <div className="flex items-center justify-between pr-4 pb-2 py-2">
                    <h1 className="text-sm font-bold text-white">Cardiovascular Exercise</h1>
                </div>
            </div>
            <div className={`${classes.categoryCard} max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 shadow`}>
                <div className="flex items-center justify-between pr-4 pb-2 py-2">
                    <h1 className="text-sm font-bold text-white">Flexibility and Stretching</h1>
                </div>
            </div>
            <div className={`${classes.categoryCard} max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 shadow`}>
                <div className="flex items-center justify-between pr-4 pb-2 py-2">
                    <h1 className="text-sm font-bold text-white">Pilates</h1>
                </div>
            </div>
            <div className={`${classes.categoryCard} max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 shadow`}>
                <div className="flex items-center justify-between pr-4 pb-2 py-2">
                    <h1 className="text-sm font-bold text-white">Functional Training</h1>
                </div>
            </div>
            <div className={`${classes.categoryCard} max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 shadow`}>
                <div className="flex items-center justify-between pr-4 pb-2 py-2">
                    <h1 className="text-sm font-bold text-white">Boxing and Martial Arts</h1>
                </div>
            </div>
            <div className={`${classes.categoryCard} max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 shadow`}>
                <div className="flex items-center justify-between pr-4 pb-2 py-2">
                    <h1 className="text-sm font-bold text-white">Rehabilitation and Physical Therapy Exercises</h1>
                </div>
            </div> */}
        </div>
      </div>
    );
  }