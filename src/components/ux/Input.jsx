import styles from '../../styles/Input.module.css'

export default function Input({
  label,
  type = "text",
  name,
  options = [],
  value,
  onChange,
  icon,
  ...rest
}) {
  const containerClass =
    type === "radio"
      ? styles.inputRadio
      : type === "select"
      ? styles.inputOption
      : styles.inputForm

  return (
    <div className={containerClass}>

      {type === "radio" && (
        <>
          {label && <p>{label}</p>}
          <div>
            {options.map((option, index) => {
              const id = `${name}${index + 1}`
              return (
                <span key={option.value} className={styles.radioItem}>
                  <input
                    type="radio"
                    id={id}
                    name={name}
                    value={option.value}
                    checked={value === option.value}
                    onChange={onChange}
                  />
                  <label htmlFor={id}>{option.label}</label>
                </span>
              )
            })}
          </div>
        </>
      )}

      {type === "select" && (
        <>
          {label && <label htmlFor={name}>{label}</label>}
          <select
            id={name}
            name={name}
            value={value}
            onChange={onChange}
          >
            <option value="">Selecione...</option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </>
      )}

      {type !== "radio" && type !== "select" && (
        <>
          {label && <label htmlFor={name}>{label}</label>}
          <div>
            {icon && <p>{icon}</p>}
            <input
              type={type}
              id={name}
              name={name}
              value={value}
              onChange={onChange}
              {...rest}
            />
          </div>
        </>
      )}

    </div>
  )
}