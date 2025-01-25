```javascript
import Link from 'next/link';

function MyComponent() {
  return (
    <div>
      <Link href="/profile">
        <a>Go to Profile</a>
      </Link>
      {/*Ensure that the /profile route exists in pages directory*/}
    </div>
  );
}

export default MyComponent; 
```