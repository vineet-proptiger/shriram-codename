'use client'

const F_JOST = 'var(--font-jost), Montserrat, sans-serif'
const F_SANS = 'var(--font-sans), Open Sans, sans-serif'
const RED = '#EB2027'

const rows = [
  { config: '1 BHK', size: '605 – 700',   price: '₹ 32 Lakhs*',  bold: true  },
  { config: '2 BHK', size: '935 - 937',   price: 'On Request',   bold: true  },
  { config: '3 BHK', size: '1328 - 1354', price: 'On Request',   bold: true  },
]

const Pricing = ({ setIsOpen }) => {
  return (
    <section id="pricing" style={{ padding: '64px 0', background: '#ffffff', borderBottom: '1px solid #f0f0f0' }}>
      <div className="container mx-auto px-4 md:px-10">

        {/* Heading */}
        <h2 style={{
          fontFamily: F_JOST, fontSize: '28px', fontWeight: '700',
          color: RED, margin: '0 0 28px',
        }} data-aos="fade-up">
          Price
        </h2>

        {/* Table */}
        <div data-aos="fade-up" data-aos-delay="60" style={{ overflowX: 'auto' }}>
          <table style={{
            width: '100%',
            borderCollapse: 'collapse',
            minWidth: '540px',
            border: '1px solid #d1d5db',
          }}>

            {/* Header */}
            <thead>
              <tr style={{ background: RED }}>
                {[
                  { label: 'Configuration', w: '22%' },
                  { label: 'Size (sq.ft.)',  w: '22%' },
                  { label: 'Price (Approx.)', w: '32%' },
                  { label: '',               w: '24%' },
                ].map((h, i) => (
                  <th key={i} style={{
                    fontFamily: F_JOST,
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#ffffff',
                    padding: '16px 20px',
                    textAlign: 'center',
                    width: h.w,
                    borderRight: i < 3 ? '1px solid rgba(255,255,255,0.2)' : 'none',
                    letterSpacing: '0.02em',
                  }}>
                    {h.label}
                  </th>
                ))}
              </tr>
            </thead>

            {/* Rows */}
            <tbody>
              {rows.map((row, idx) => (
                <tr key={idx} style={{ borderBottom: '1px solid #d1d5db', background: '#fff' }}>

                  {/* Configuration */}
                  <td style={{
                    fontFamily: F_SANS,
                    fontSize: '15px',
                    fontWeight: '500',
                    color: '#1a1a1a',
                    padding: '18px 20px',
                    textAlign: 'center',
                    borderRight: '1px solid #d1d5db',
                  }}>
                    {row.config}
                  </td>

                  {/* Size */}
                  <td style={{
                    fontFamily: F_SANS,
                    fontSize: '14px',
                    fontWeight: '400',
                    color: '#6b7280',
                    padding: '18px 20px',
                    textAlign: 'center',
                    borderRight: '1px solid #d1d5db',
                  }}>
                    {row.size}
                  </td>

                  {/* Price */}
                  <td style={{
                    fontFamily: F_SANS,
                    fontSize: '16px',
                    fontWeight: '700',
                    color: '#111827',
                    padding: '18px 20px',
                    textAlign: 'center',
                    borderRight: '1px solid #d1d5db',
                  }}>
                    {row.price}
                  </td>

                  {/* Button */}
                  <td style={{ padding: '14px 20px', textAlign: 'center' }}>
                    <button
                      onClick={() => setIsOpen(true)}
                      style={{
                        background: 'transparent',
                        color: RED,
                        border: `1.5px solid ${RED}`,
                        borderRadius: '3px',
                        padding: '7px 18px',
                        fontFamily: F_JOST,
                        fontSize: '12px',
                        fontWeight: '600',
                        letterSpacing: '0.04em',
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                        whiteSpace: 'nowrap',
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.background = RED
                        e.currentTarget.style.color = '#fff'
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.background = 'transparent'
                        e.currentTarget.style.color = RED
                      }}
                    >
                      Enquire Now
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  )
}

export default Pricing
