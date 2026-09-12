import { useEffect, useState } from 'react';
import './App.css';

import Sidebar from './components/Sidebar';
import Header from './components/Header';
import StatCard from './components/StatCard';
import ApplicationRow from './components/ApplicationRow';
import ApplicationForm from './components/ApplicationForm';
import ApplicationPipeline from './components/ApplicationPipeline';
import StatusDistribution from './components/StatusDistribution';
import ApplicationTrends from './components/ApplicationTrends';
import {
  getApplications,
  createApplication,
  updateApplication,
  deleteApplication,
  getApplicationStats,
  getApplicationTrends,
} from './services/applicationService';

function App() {
  const [showForm, setShowForm] = useState(false);
  const [editingApplication, setEditingApplication] = useState(null);
  const [activePage, setActivePage] = useState('dashboard');
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  const [applications, setApplications] = useState([]);

  const [stats, setStats] = useState({
    total: 0,
    applied: 0,
    assessment: 0,
    interview: 0,
    offer: 0,
    rejected: 0,
  });

  const [trends, setTrends] = useState([]);

  const applicationCount = stats.total;

const interviewCount = stats.interview;

const offerCount = stats.offer;

const respondedCount = stats.total - stats.applied;

const responseRate =
  stats.total === 0
    ? 0
    : Math.round((respondedCount / stats.total) * 100);

    const filteredApplications = applications.filter((application) => {
      const search = searchTerm.toLowerCase();
    
      const matchesSearch =
        application.company.toLowerCase().includes(search) ||
        application.role.toLowerCase().includes(search);
    
      const matchesStatus =
        statusFilter === 'All' ||
        application.status === statusFilter;
    
      return matchesSearch && matchesStatus;
    });

useEffect(() => {
  async function loadApplications() {
    try {
      const data = await getApplications();
      setApplications(data);
    } catch (error) {
      console.error(error);
    }
  }

  loadApplications();
}, []);


useEffect(() => {
  async function loadStats() {
    try {
      const data = await getApplicationStats();
      setStats(data);
    } catch (error) {
      console.error(error);
    }
  }

  loadStats();
}, []);

useEffect(() => {
  async function loadTrends() {
    try {
      const data = await getApplicationTrends();
      setTrends(data);
    } catch (error) {
      console.error(error);
    }
  }

  loadTrends();
}, []);


  return (
    <div className="app">
      <Sidebar
        activePage={activePage}
        onPageChange={setActivePage}
      />

      <main className="main-content">
        {activePage === 'dashboard' && (
          <>
            <Header
              onAddApplication={() => setShowForm(true)}
            />


<section className="stats">
  <StatCard
    title="Applications"
    value={applicationCount}
  />

  <StatCard
    title="Interviews"
    value={interviewCount}
  />

  <StatCard
    title="Offers"
    value={offerCount}
  />

<StatCard
  title="Response Rate"
  value={`${responseRate}%`}
/>
</section>

<ApplicationPipeline stats={stats} />

<StatusDistribution stats={stats} />

<ApplicationTrends trends={trends} />


            <section className="applications">
              <div className="section-header">
                <div>
                  <h2>Recent Applications</h2>
                  <p>Keep track of your latest opportunities.</p>
                </div>

                <button
  className="view-button"
  onClick={() => setActivePage('applications')}
>
  View All
</button>
              </div>

              <div className="application-list">
  {filteredApplications.length === 0 ? (
    <div className="empty-state">
      <h3>No applications found</h3>
      <p>
        Start tracking your job applications by adding your first one.
      </p>

      <button
        className="add-button"
        onClick={() => setShowForm(true)}
      >
        + Add Application
      </button>
    </div>
  ) : (
    filteredApplications.map((application) => (
      <ApplicationRow
        key={application._id}
        company={application.company}
        role={application.role}
        location={application.location}
        date={application.date}
        status={application.status}
        id={application._id}
        onDelete={async () => {
          try {
            await deleteApplication(application._id);

            setApplications((currentApplications) =>
              currentApplications.filter(
                (item) => item._id !== application._id
              )
            );
          } catch (error) {
            console.error(error);
          }
        }}
        onEdit={() => {
          setEditingApplication(application);
          setShowForm(true);
        }}
      />
    ))
  )}
</div>
            </section>
          </>
        )}
        
        {showForm && (
  <ApplicationForm
  application={editingApplication}
  onClose={() => {
    setShowForm(false);
    setEditingApplication(null);
  }}
  onSave={async (newApplication) => {
    try {
      if (editingApplication) {
        const updatedApplication = await updateApplication(
          editingApplication._id,
          newApplication
        );
  
        setApplications((currentApplications) =>
          currentApplications.map((application) =>
            application._id === editingApplication._id
              ? updatedApplication
              : application
          )
        );
      } else {
        const savedApplication = await createApplication(
          newApplication
        );
  
        setApplications((currentApplications) => [
          ...currentApplications,
          savedApplication,
        ]);
      }
  
      setShowForm(false);
      setEditingApplication(null);
    } catch (error) {
      console.error(error);
    }
  }}
/>
)}

{activePage === 'applications' && (
  <section className="applications">
    <div className="section-header">
      <div>
        <h1>Applications</h1>
        <p>Manage all your job applications here.</p>
      </div>

      <button
        className="add-button"
        onClick={() => setShowForm(true)}
      >
        + Add Application
      </button>
    </div>

    <div className="application-tools">
  <input
    type="text"
    placeholder="Search by company or role..."
    value={searchTerm}
    onChange={(event) => setSearchTerm(event.target.value)}
  />

  <select
    value={statusFilter}
    onChange={(event) => setStatusFilter(event.target.value)}
  >
    <option value="All">All Statuses</option>
    <option value="Applied">Applied</option>
    <option value="Assessment">Assessment</option>
    <option value="Interview">Interview</option>
    <option value="Offer">Offer</option>
    <option value="Rejected">Rejected</option>
  </select>
</div>

    <div className="application-list">
      {filteredApplications.map((application) => (
        <ApplicationRow
          key={application._id}
          company={application.company}
          role={application.role}
          status={application.status}
          id={application._id}
          onDelete={async () => {
            try {
              await deleteApplication(application._id);
          
              setApplications((currentApplications) =>
                currentApplications.filter(
                  (item) => item._id !== application._id
                )
              );
            } catch (error) {
              console.error(error);
            }
          }}
onEdit={() => {
  setEditingApplication(application);
  setShowForm(true);
}}
        />
      ))}
    </div>
  </section>
)}



        {activePage === 'interviews' && (
          <div>
            <h1>Interviews</h1>
            <p>Track your upcoming interviews here.</p>
          </div>
        )}

        {activePage === 'settings' && (
          <div>
            <h1>Settings</h1>
            <p>Manage your JobTrack settings here.</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;