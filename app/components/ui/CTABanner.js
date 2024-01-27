import React from 'react'

const CTABanner = () => {
  return (
    <section>
        <div className="begin" style={{ marginTop: "40px", padding: "0 60px" }}>
                    <div style={{ textAlign: "left", backgroundColor: "hsl(223, 11%, 87%)", borderBottom: "10px solid", marginTop: "120px", padding: "94px 60px"}}>
                        <div style={{ width: "50%", display: "inline-flex", verticalAlign: "top", boxSizing: "border-box", padding: "0px 20px" }}>
                            <p style={{ fontWeight: "700", fontSize: "40px", margin: "0px" }}>NOW LETS FIND OUT ABOUT YOU</p>
                        </div>
                        <div style={{ width: "50%", display: "inline-block" }}>
                            <p style={{ fontWeight: "700", fontSize: "40px", margin: "0px" }}>Lörem ipsum</p>
                            <p style={{ fontWeight: "700", fontSize: "40px", margin: "0px" }}>Lörem ipsum</p>
                            <p style={{ fontWeight: "700", fontSize: "40px", margin: 0 }}>Lörem ipsum</p>
                            
                            <button>START SURVEY</button>
                        </div>
                </div>
        
        </div>
    </section>
  )
}

export default CTABanner
