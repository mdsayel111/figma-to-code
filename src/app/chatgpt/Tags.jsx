export default function Tags({ tags }) {
    return (
      <div className="flex gap-2 mt-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-xs font-medium px-2 py-1 bg-gray-100 text-gray-700 rounded"
          >
            {tag}
          </span>
        ))}
      </div>
    );
  }
  