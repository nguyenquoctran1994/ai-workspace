import { useMemo, useState } from 'react'
import './App.css'

const productCards = [
  { title: 'GH CREATION EX+', subtitle: 'Giấc ngủ & phục hồi', accent: 'purple' },
  { title: 'DAY ACTIVATION', subtitle: 'Năng lượng cân bằng', accent: 'cyan' },
  { title: 'NIGHT RECOVERY', subtitle: 'Thư giãn và phục hồi', accent: 'midnight' }
]

const problemCards = [
  {
    icon: '☾',
    title: 'Ngủ muộn, khó duy trì nhịp sinh hoạt',
    text: 'Giấc ngủ ảnh hưởng lớn đến phục hồi, năng lượng và khả năng duy trì routine mỗi ngày.'
  },
  {
    icon: '◌',
    title: 'Ăn uống và vận động thiếu đều đặn',
    text: 'Khi lịch học bận rộn, phụ huynh rất khó biết con đang thiếu phần nào trong nền tảng sinh hoạt.'
  },
  {
    icon: '⌁',
    title: 'Không biết bắt đầu theo dõi từ đâu',
    text: 'Chiều cao và thói quen cần được quan sát theo tuần, theo tháng, không đánh giá vội sau vài ngày.'
  }
]

const systemCards = [
  {
    icon: '01',
    title: 'Giấc ngủ',
    text: 'Thiết lập giờ ngủ, giờ dậy và thói quen chuẩn bị trước khi ngủ để hỗ trợ phục hồi.'
  },
  {
    icon: '02',
    title: 'Vận động',
    text: 'Gợi ý khung tập phù hợp với lịch học, mức năng lượng và khả năng duy trì của con.'
  },
  {
    icon: '03',
    title: 'Dinh dưỡng',
    text: 'Nhắc lịch bữa ăn, nước uống và nền tảng dinh dưỡng thay vì bán hàng theo cảm tính.'
  },
  {
    icon: '04',
    title: 'Theo dõi',
    text: 'Ghi nhận thói quen, chiều cao, cân nặng và phản hồi để điều chỉnh routine thực tế hơn.'
  }
]

const timelineSteps = [
  {
    number: '1',
    title: 'Ngày 1 - Đánh giá nền tảng',
    text: 'Ghi nhận tuổi, giới tính, chiều cao, cân nặng, thói quen ngủ, vận động và mục tiêu.'
  },
  {
    number: '2',
    title: 'Tuần 1 - Thiết lập routine',
    text: 'Chọn giờ ngủ, giờ tập, nhịp học và checklist theo dõi đơn giản cho gia đình.'
  },
  {
    number: '3',
    title: 'Tuần 2-3 - Theo dõi và điều chỉnh',
    text: 'Quan sát mức độ duy trì thói quen, năng lượng và phản hồi của con.'
  },
  {
    number: '4',
    title: 'Tuần 4 - Tổng kết lộ trình',
    text: 'Tổng hợp dữ liệu, đánh giá tiến độ và đề xuất bước tiếp theo phù hợp.'
  }
]

const packageOptions = [
  {
    name: 'Gói Cơ bản',
    tagline: 'Dành cho gia đình mới bắt đầu',
    bullets: ['Routine ngủ, ăn uống và vận động cơ bản', 'Checklist theo dõi 30 ngày', 'Hướng dẫn duy trì thói quen tại nhà']
  },
  {
    name: 'Gói Đồng hành',
    badge: 'Khuyên dùng',
    tagline: 'Theo sát hơn trong 30 ngày',
    bullets: ['Tất cả trong Gói Cơ bản', 'Theo dõi thói quen hằng ngày', 'Điều chỉnh routine linh hoạt', 'Hỗ trợ tư vấn định kỳ'],
    featured: true
  },
  {
    name: 'Gói Cá nhân hóa',
    tagline: 'Cho gia đình cần theo dõi sâu hơn',
    bullets: ['Đánh giá chi tiết hơn theo hồ sơ cá nhân', 'Theo dõi sát hơn trong quá trình sử dụng', 'Tư vấn theo từng giai đoạn']
  }
]

const workoutDays = ['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7', 'CN']

const trackerItems = ['Giờ ngủ', 'Giờ dậy', 'Vận động', 'Bữa ăn', 'Uống nước', 'Ghi chú năng lượng']

const scrollToSection = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

const toMinutes = (time) => {
  const [hours, minutes] = time.split(':').map(Number)
  return hours * 60 + minutes
}

const formatDuration = (minutes) => {
  const normalized = Math.max(0, minutes)
  const hours = Math.floor(normalized / 60)
  const mins = normalized % 60
  return mins ? `${hours} giờ ${mins} phút` : `${hours} giờ`
}

function App() {
  const [planner, setPlanner] = useState({
    age: '14',
    schoolStart: '07:00',
    wakeTime: '06:00',
    sleepTime: '22:00',
    workoutTime: '17:30',
    workoutLength: '35',
    intensity: 'balanced',
    days: ['Thứ 2', 'Thứ 4', 'Thứ 6']
  })
  const [copyStatus, setCopyStatus] = useState('')

  const [formData, setFormData] = useState({
    parentName: '',
    childAge: '',
    gender: '',
    height: '',
    weight: '',
    sleepHabits: '',
    workoutHabits: '',
    preferredTime: '',
    phone: '',
    goal: ''
  })

  const routine = useMemo(() => {
    const sleepStart = toMinutes(planner.sleepTime)
    const wake = toMinutes(planner.wakeTime)
    const sleepMinutes = wake > sleepStart ? wake - sleepStart : 1440 - sleepStart + wake
    const schoolBuffer = toMinutes(planner.schoolStart) - wake
    const sleepLabel = formatDuration(sleepMinutes)
    const sleepStatus = sleepMinutes >= 480 ? 'Ổn để tham khảo' : 'Nên tăng thêm thời lượng ngủ'
    const bufferStatus = schoolBuffer >= 45 ? 'Có đủ thời gian buổi sáng' : 'Buổi sáng hơi gấp'
    const weeklyWorkout = Number(planner.workoutLength) * planner.days.length
    const workoutTone = {
      light: 'nhẹ, dễ duy trì',
      balanced: 'cân bằng giữa sức bền và phục hồi',
      active: 'năng động, cần theo dõi phục hồi'
    }[planner.intensity]

    return {
      sleepLabel,
      sleepStatus,
      bufferStatus,
      weeklyWorkout,
      workoutTone,
      scheduleLine: `${planner.days.join(', ')} lúc ${planner.workoutTime} (${planner.workoutLength} phút)`
    }
  }, [planner])

  const handlePlannerChange = (event) => {
    const { name, value } = event.target
    setPlanner((current) => ({ ...current, [name]: value }))
  }

  const toggleDay = (day) => {
    setPlanner((current) => {
      const nextDays = current.days.includes(day)
        ? current.days.filter((item) => item !== day)
        : [...current.days, day]
      return { ...current, days: nextDays }
    })
  }

  const copyRoutine = async () => {
    const text = [
      'Lịch tham khảo WEEN JAPAN',
      `Tuổi: ${planner.age}`,
      `Ngủ: ${planner.sleepTime} - ${planner.wakeTime} (${routine.sleepLabel})`,
      `Tập luyện: ${routine.scheduleLine}`,
      `Ghi chú: ${routine.sleepStatus}; ${routine.bufferStatus}; vận động ${routine.workoutTone}.`
    ].join('\n')

    try {
      if (!navigator.clipboard?.writeText) {
        throw new Error('Clipboard API unavailable')
      }
      await navigator.clipboard.writeText(text)
      setCopyStatus('Đã sao chép lịch tham khảo.')
    } catch {
      setCopyStatus('Trình duyệt chưa cho phép sao chép tự động. Bạn có thể chụp màn hình hoặc nhập lại lịch tham khảo bên trên.')
    }
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('Lead submitted:', { ...formData, planner })
    alert('Cảm ơn bạn đã gửi thông tin. WEEN JAPAN sẽ liên hệ để tư vấn routine phù hợp.')
  }

  return (
    <div className="app">
      <section className="hero-section">
        <div className="container hero-inner">
          <div className="hero-copy">
            <p className="eyebrow">WEEN JAPAN</p>
            <h1>Hệ thống routine hỗ trợ nền tảng phát triển cho tuổi teen</h1>
            <p className="hero-text">
              WEEN JAPAN giúp phụ huynh xây dựng lịch ngủ, vận động, dinh dưỡng và theo dõi thói quen hằng ngày cho con một cách có hệ thống.
            </p>
            <div className="hero-ctas">
              <button className="cta-primary" type="button" onClick={() => scrollToSection('routine-planner')}>Tạo lịch cho con</button>
              <button className="cta-secondary" type="button" onClick={() => scrollToSection('lead-form')}>Nhận tư vấn routine</button>
            </div>
            <div className="hero-badges">
              <span className="badge">Sleep planning</span>
              <span className="badge">Workout schedule</span>
              <span className="badge">Parent-friendly</span>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-card hero-card-soft">
              <span className="visual-label">Daily routine</span>
              <div className="visual-illustration">22:00</div>
              <p>Giờ ngủ rõ ràng, dễ theo dõi</p>
            </div>
            <div className="product-stack">
              {productCards.map((item) => (
                <div key={item.title} className={`product-card product-card-${item.accent}`}>
                  <span className="product-chip">{item.subtitle}</span>
                  <h3>{item.title}</h3>
                </div>
              ))}
            </div>
            <div className="hero-card hero-card-sharp">
              <span className="visual-label">Workout</span>
              <div className="visual-illustration">35 phút</div>
              <p>Lịch vận động phù hợp với nhịp học</p>
            </div>
          </div>
        </div>
      </section>

      <section className="problem-section">
        <div className="container">
          <h2 className="section-title">Phụ huynh không thiếu quan tâm, chỉ thiếu một hệ thống dễ duy trì</h2>
          <div className="card-grid">
            {problemCards.map((card) => (
              <article key={card.title} className="glass-card problem-card">
                <div className="problem-icon">{card.icon}</div>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="system-section">
        <div className="container">
          <h2 className="section-title">WEEN kết nối sản phẩm, thói quen và theo dõi</h2>
          <div className="card-grid">
            {systemCards.map((card) => (
              <article key={card.title} className="glass-card feature-card">
                <div className="icon-circle">{card.icon}</div>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="planner-section" id="routine-planner">
        <div className="container planner-layout">
          <div className="planner-copy">
            <p className="eyebrow">Interactive planner</p>
            <h2>Tạo lịch ngủ và vận động tham khảo</h2>
            <p>
              Phụ huynh có thể thử thiết lập khung giờ sinh hoạt cho con trước khi gửi thông tin tư vấn. Đây là lịch tham khảo, không thay thế đánh giá y tế hoặc hướng dẫn cá nhân từ chuyên gia.
            </p>
            <div className="planner-summary glass-card">
              <span>Thời lượng ngủ</span>
              <strong>{routine.sleepLabel}</strong>
              <p>{routine.sleepStatus}</p>
            </div>
            <div className="planner-summary glass-card">
              <span>Lịch vận động</span>
              <strong>{routine.weeklyWorkout} phút / tuần</strong>
              <p>{routine.scheduleLine}</p>
            </div>
          </div>

          <div className="planner-panel glass-card">
            <div className="planner-grid">
              <label>
                Tuổi của con
                <input name="age" type="number" min="10" max="18" value={planner.age} onChange={handlePlannerChange} />
              </label>
              <label>
                Giờ vào học
                <input name="schoolStart" type="time" value={planner.schoolStart} onChange={handlePlannerChange} />
              </label>
              <label>
                Giờ đi ngủ
                <input name="sleepTime" type="time" value={planner.sleepTime} onChange={handlePlannerChange} />
              </label>
              <label>
                Giờ thức dậy
                <input name="wakeTime" type="time" value={planner.wakeTime} onChange={handlePlannerChange} />
              </label>
              <label>
                Giờ tập
                <input name="workoutTime" type="time" value={planner.workoutTime} onChange={handlePlannerChange} />
              </label>
              <label>
                Thời lượng tập
                <select name="workoutLength" value={planner.workoutLength} onChange={handlePlannerChange}>
                  <option value="20">20 phút</option>
                  <option value="35">35 phút</option>
                  <option value="45">45 phút</option>
                  <option value="60">60 phút</option>
                </select>
              </label>
            </div>

            <div className="planner-field">
              <span>Cường độ vận động</span>
              <div className="segmented-control">
                {[
                  ['light', 'Nhẹ'],
                  ['balanced', 'Cân bằng'],
                  ['active', 'Năng động']
                ].map(([value, label]) => (
                  <button
                    key={value}
                    type="button"
                    className={planner.intensity === value ? 'active' : ''}
                    onClick={() => setPlanner((current) => ({ ...current, intensity: value }))}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            <div className="planner-field">
              <span>Ngày tập trong tuần</span>
              <div className="day-picker">
                {workoutDays.map((day) => (
                  <button
                    key={day}
                    type="button"
                    className={planner.days.includes(day) ? 'selected' : ''}
                    onClick={() => toggleDay(day)}
                  >
                    {day}
                  </button>
                ))}
              </div>
            </div>

            <div className="routine-preview">
              <div>
                <span>Buổi sáng</span>
                <strong>{routine.bufferStatus}</strong>
              </div>
              <div>
                <span>Gợi ý vận động</span>
                <strong>{routine.workoutTone}</strong>
              </div>
            </div>

            <button className="form-submit" type="button" onClick={copyRoutine}>Sao chép lịch tham khảo</button>
            {copyStatus && <p className="planner-copy-status" role="status">{copyStatus}</p>}
          </div>
        </div>
      </section>

      <section className="timeline-section">
        <div className="container">
          <h2 className="section-title">Hệ thống 30 ngày hoạt động như thế nào?</h2>
          <div className="timeline-grid">
            {timelineSteps.map((step) => (
              <article key={step.title} className="timeline-card glass-card">
                <div className="timeline-number">{step.number}</div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="packs-section">
        <div className="container">
          <h2 className="section-title">Các gói hỗ trợ</h2>
          <div className="packs-grid">
            {packageOptions.map((pack) => (
              <article key={pack.name} className={`pack-card glass-card ${pack.featured ? 'featured' : ''}`}>
                {pack.badge && <span className="pack-badge">{pack.badge}</span>}
                <h3>{pack.name}</h3>
                <p className="pack-tagline">{pack.tagline}</p>
                <ul>
                  {pack.bullets.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="tracker-section">
        <div className="container">
          <h2 className="section-title">Theo dõi thói quen hằng ngày</h2>
          <p className="section-subtitle">MVP tập trung vào các chỉ số dễ ghi nhận để phụ huynh và con cùng nhìn thấy mức độ duy trì routine.</p>
          <div className="tracker-grid">
            {trackerItems.map((item) => (
              <div key={item} className="tracker-item">
                <span className="tracker-icon">✓</span>
                <span className="tracker-label">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="trust-section">
        <div className="container">
          <h2 className="section-title">An toàn, minh bạch và thực tế</h2>
          <div className="trust-content glass-card">
            <div className="trust-item">
              <span className="trust-icon">✓</span>
              <div>
                <p><strong>Chiều cao phụ thuộc vào nhiều yếu tố</strong></p>
                <p>Di truyền, dinh dưỡng, giấc ngủ, vận động, độ tuổi và mức độ duy trì routine đều cần được nhìn nhận cùng nhau.</p>
              </div>
            </div>
            <div className="trust-item">
              <span className="trust-icon">✓</span>
              <div>
                <p><strong>Không cam kết kết quả tức thì</strong></p>
                <p>WEEN JAPAN tập trung vào nền tảng thói quen, theo dõi đều đặn và tư vấn lộ trình phù hợp.</p>
              </div>
            </div>
            <div className="trust-item">
              <span className="trust-icon">✓</span>
              <div>
                <p><strong>Không thay thế tư vấn y tế</strong></p>
                <p>Với các trường hợp đặc biệt, phụ huynh nên tham khảo ý kiến chuyên môn từ bác sĩ.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="form-section" id="lead-form">
        <div className="container">
          <h2 className="section-title">Nhận đánh giá routine miễn phí</h2>
          <p className="section-subtitle">Gửi thông tin cơ bản để WEEN JAPAN gợi ý lộ trình ngủ, vận động và theo dõi phù hợp hơn cho con.</p>
          <form className="lead-form glass-card" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="parentName">Tên phụ huynh <span className="required">*</span></label>
                <input id="parentName" name="parentName" value={formData.parentName} onChange={handleInputChange} placeholder="Ví dụ: Nguyễn Văn A" required />
              </div>
              <div className="form-group">
                <label htmlFor="childAge">Tuổi của con <span className="required">*</span></label>
                <input id="childAge" name="childAge" type="number" value={formData.childAge} onChange={handleInputChange} placeholder="10-18" min="10" max="18" required />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="gender">Giới tính của con <span className="required">*</span></label>
                <select id="gender" name="gender" value={formData.gender} onChange={handleInputChange} required>
                  <option value="">Chọn giới tính</option>
                  <option value="male">Nam</option>
                  <option value="female">Nữ</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="height">Chiều cao hiện tại (cm) <span className="required">*</span></label>
                <input id="height" name="height" type="number" value={formData.height} onChange={handleInputChange} placeholder="Ví dụ: 160" min="100" max="220" required />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="weight">Cân nặng hiện tại (kg)</label>
                <input id="weight" name="weight" type="number" value={formData.weight} onChange={handleInputChange} placeholder="Ví dụ: 50" min="20" max="130" />
              </div>
              <div className="form-group">
                <label htmlFor="preferredTime">Thời gian muốn được tư vấn</label>
                <input id="preferredTime" name="preferredTime" type="datetime-local" value={formData.preferredTime} onChange={handleInputChange} />
              </div>
            </div>
            <div className="form-group full-width">
              <label htmlFor="sleepHabits">Thói quen ngủ hiện tại <span className="required">*</span></label>
              <input id="sleepHabits" name="sleepHabits" value={formData.sleepHabits} onChange={handleInputChange} placeholder="Ví dụ: ngủ khoảng 23:00, dậy 6:00" required />
            </div>
            <div className="form-group full-width">
              <label htmlFor="workoutHabits">Thói quen vận động hiện tại</label>
              <input id="workoutHabits" name="workoutHabits" value={formData.workoutHabits} onChange={handleInputChange} placeholder="Ví dụ: đá bóng 2 buổi/tuần, ít giãn cơ" />
            </div>
            <div className="form-group full-width">
              <label htmlFor="phone">Số điện thoại / Zalo <span className="required">*</span></label>
              <input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleInputChange} placeholder="+84 9xx xxx xxx" required />
            </div>
            <div className="form-group full-width">
              <label htmlFor="goal">Mục tiêu hoặc vấn đề đang quan tâm</label>
              <textarea id="goal" name="goal" value={formData.goal} onChange={handleInputChange} placeholder="Ví dụ: muốn con ngủ sớm hơn, vận động đều hơn, theo dõi routine 30 ngày..." rows="4" />
            </div>
            <button type="submit" className="form-submit">Gửi thông tin tư vấn routine</button>
            <p className="form-note">Thông tin chỉ dùng để gợi ý routine phù hợp hơn. WEEN JAPAN không chia sẻ dữ liệu cho bên thứ ba.</p>
          </form>
        </div>
      </section>
    </div>
  )
}

export default App
