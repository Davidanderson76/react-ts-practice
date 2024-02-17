import { type ReactNode } from "react";

interface CourseGoalProps {
  id: number;
  title: string;
  onDelete: (id: number) => void;
  children: ReactNode;
}

// OR
// type CourseGoalProps = PropsWithChildren<{ title: string }>;

export default function CourseGoal({
  title,
  id,
  children,
  onDelete,
}: CourseGoalProps) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </article>
  );
}

// OR
// const CourseGoal: FC<CourseGoalProps2> = ({ title, children }) => {
//   return (
//     <article>
//       <div>
//         <h2>{title}</h2>
//         {children}
//       </div>
//       <button>Delete</button>
//     </article>
//   );
// };

// export default CourseGoal;
