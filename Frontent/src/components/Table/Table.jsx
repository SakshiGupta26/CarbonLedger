const sizeStyles = {
  sm: {
    th: "px-3 py-2 text-xs",
    td: "px-3 py-2 text-xs",
  },
  md: {
    th: "px-4 py-3 text-sm",
    td: "px-4 py-3 text-sm",
  },
  lg: {
    th: "px-6 py-4 text-sm",
    td: "px-6 py-4 text-base",
  },
}

function Table({
  colums = [],
  data = [],
  size = "md",
  onRowClick,
}) {
  const styles = sizeStyles[size] || sizeStyles.sm

  return (
    <table className="w-full">

      <thead>
        <tr>
          {colums.map((column) => (
            <th
              key={column.key}
              className={`${styles.th}
                text-left
                font-['JetBrains_Mono']
                font-bold
                uppercase
                tracking-wider
                text-[#97a59b]`}
            >
              {column.label}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {data.length > 0 ? (
          data.map((row, index) => (
            <tr
              key={row.id || index}
              onClick={() => onRowClick?.(row)}
              className={`border-b border-[#3c4a42] last:border-b-0 hover:bg-[#252b28] ${
                onRowClick ? "cursor-pointer" : ""
              }`}
            >
              {colums.map((column, columnIndex) => (
                <td
                  key={column.key}
                  className={`${styles.td} font-['Inter'] text-[#dee4de]`}
                >
                  {columnIndex === colums.length - 1 ? (
                    <span className="inline-flex items-center gap-1 bg-[#123c2c] text-[#10B981] px-3 py-1 rounded-full font-medium">
                      ✓ {column.render
                        ? column.render(row)
                        : row[column.key]}
                    </span>
                  ) : (
                    column.render
                      ? column.render(row)
                      : row[column.key]
                  )}
                </td>
              ))}
            </tr>
          ))
        ) : (
          <tr>
            <td
              colSpan={colums.length}
              className="text-center text-[#86948a] py-6"
            >
              No data available
            </td>
          </tr>
        )}
      </tbody>

    </table>
  )
}

export default Table