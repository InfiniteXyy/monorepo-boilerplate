# UI Components

A shared UI component library for the monorepo.

## Components

- `Button`: A customizable button component with different variants
- `Card`: A container component with consistent styling
- `CardTitle`: A title component for use within cards
- `Input`: A styled input field
- `TextArea`: A styled textarea field
- `LoadingState`: A loading indicator component

## Usage

```tsx
import { Button, Card, CardTitle, Input, TextArea, LoadingState } from '@repo/ui-components';
import '@repo/ui-components/styles.css'; // Import styles if needed

// Use components in your app
function MyForm() {
  return (
    <Card>
      <CardTitle>My Form</CardTitle>
      <form className="space-y-4">
        <div>
          <Input name="name" placeholder="Your name" />
        </div>
        <div>
          <TextArea name="message" placeholder="Your message" />
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </Card>
  );
}
```

## Styling

This package uses Tailwind CSS for styling. Make sure to import the styles in your application:

```tsx
import '@repo/ui-components/styles.css';
```
